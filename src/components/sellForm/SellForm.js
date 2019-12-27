import React, { useState } from "react";
import categories from "../../data/categories.json";
import { storage, firestore } from "../../firebase";
import { FormWrapper, Label } from "./SellFormStyles.js";

function SellForm() {
  console.log(storage);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [subcategory, setSubcategory] = useState(categories[0].categories[0]);
  const [subsubcategory, setSubsubcategory] = useState(
    categories[0].categories[0].categories[0]
  );
  const [subcategories, setSubcategories] = useState(categories[0].categories);
  const [subsubcategories, setSubsubcategories] = useState(
    categories[0].categories[0].categories
  );
  const [description, setDescription] = useState("");
  const [startingBid, setStartingBid] = useState(0);
  const [endDate, setEndDate] = useState(new Date().toDateString());
  const [image, setImage] = useState(null);

  console.log(image);
  function onCategoryChange(e) {
    const selectId = e.target.id;
    const selectedOption = e.target.value;

    switch (selectId) {
      case "categories":
        const selectedCategory = categories.filter(
          category => category.name === selectedOption
        )[0];
        setCategory(selectedCategory);
        setSubsubcategory(selectedCategory.categories[0]);
        setSubcategories(selectedCategory.categories);
        setSubsubcategories(selectedCategory.categories[0].categories);
        break;

      case "subcategories":
        const selectedSubcategory = subcategories.filter(
          category => category.name === selectedOption
        )[0];
        setSubcategory(selectedSubcategory);
        setSubsubcategory(selectedSubcategory.categories[0]);
        setSubsubcategories(selectedSubcategory.categories);
        break;

      case "subsubcategories":
        const selectedSubsubcategory = subsubcategories.filter(
          category => category.name === selectedOption
        )[0];
        setSubsubcategory(selectedSubsubcategory);
        break;

      default:
        break;
    }
  }

  function onFormSubmit(e) {
    e.preventDefault();
    // var storageRef = storage.ref();
    // File or Blob named mountains.jpg
    var file = image;

    // Create the file metadata
    var metadata = {
      contentType: "image/jpeg",
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    var uploadTask = storage
      .ref(`images`)
      .child(file.name)
      .put(file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed", // or 'state_changed'
      function(snapshot) {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused": // or 'paused'
            console.log("Upload is paused");
            break;
          case "running": // or 'running'
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      function(error) {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;

          case "storage/canceled":
            // User canceled the upload
            break;

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;

          default:
            break;
        }
      },
      function() {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          console.log("File available at", downloadURL);
          firestore
            .collection("lots")
            .add({
              title,
              category: category.name,
              subcategory,
              subsubcategory,
              description,
              startingBid,
              endDate,
              imageUrl: downloadURL,
            })
            .then(function() {
              console.log("Document successfully written!");
            })
            .catch(function(error) {
              console.error("Error writing document: ", error);
            });
        });
      }
    );
  }

  return (
    <FormWrapper onSubmit={onFormSubmit}>
      <Label htmlFor="title">Title</Label>
      <input
        type="text"
        title="name"
        id="name"
        onChange={e => setTitle(e.target.value)}
      />

      <Label htmlFor="categories">Select category</Label>
      <select name="categories" id="categories" onChange={onCategoryChange}>
        {categories.map(category => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>

      <select
        name="subcategories"
        id="subcategories"
        onChange={onCategoryChange}
      >
        {subcategories.map(category => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>

      <select
        name="subsubcategories"
        id="subsubcategories"
        onChange={onCategoryChange}
      >
        {subsubcategories.map(category => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <Label htmlFor="description">Description</Label>
      <input
        type="text"
        title="description"
        id="description"
        onChange={e => setDescription(e.target.value)}
      />
      <Label htmlFor="startingBid">Starting bid</Label>
      <input
        type="number"
        title="startingBid"
        id="startingBid"
        onChange={e => setStartingBid(e.target.value)}
      />
      <Label htmlFor="endDate">Auction end date</Label>
      <input
        type="date"
        name="endDate"
        id="endDate"
        onChange={e => setEndDate(new Date(e.target.value).getTime())}
      />
      <Label htmlFor="image">Image of the item</Label>
      <input
        type="file"
        name="image"
        id="image"
        onChange={e => {
          if (e.target.files[0]) {
            setImage(e.target.files[0]);
          }
        }}
      />
      <button type="submit">Place Item</button>
    </FormWrapper>
  );
}

export default SellForm;
