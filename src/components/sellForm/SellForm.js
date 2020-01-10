import React, { useState } from "react";
import { connect } from "react-redux";
import categories from "../../data/categories.json";
import { storage, firestore } from "../../firebase";
import {
  FormWrapper,
  Label,
  Input,
  TextArea,
  Select,
  ImageContainer,
  Image,
  Button,
} from "./SellFormStyles.js";

function SellForm(props) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [subcategory, setSubcategory] = useState(
    categories[0].subcategories[0]
  );
  const [subcategories, setSubcategories] = useState(
    categories[0].subcategories
  );
  const [description, setDescription] = useState("");
  const [startingBid, setStartingBid] = useState(10);
  const [image, setImage] = useState(null);
  const [imagePreviewURL, setImagePreviewURL] = useState(null);

  function onCategoryChange(e) {
    const selectId = e.target.id;
    const selectedOption = e.target.value;

    switch (selectId) {
      case "categories":
        const selectedCategory = categories.filter(
          category => category.name === selectedOption
        )[0];
        setCategory(selectedCategory);
        setSubcategory(selectedCategory.subcategories);
        setSubcategories(selectedCategory.subcategories);
        break;

      case "subcategories":
        const selectedSubcategory = subcategories.filter(
          subcategory => subcategory.name === selectedOption
        )[0];
        setSubcategory(selectedSubcategory);
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
          let date = new Date();
          date.setDate(date.getDate() + 7);

          firestore
            .collection("items")
            .add({
              title,
              category: category.name,
              subcategory: subcategory.name,
              description,
              startingBid: parseInt(startingBid, 10),
              currentBid: parseInt(startingBid, 10),
              bidsCount: 0,
              endDate: date,
              imageUrl: downloadURL,
              ownerID: props.auth.user.uid,
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
      <Input
        type="text"
        title="name"
        id="name"
        value={title}
        onChange={e => setTitle(e.target.value.trim())}
      />

      <Label htmlFor="categories">Select category</Label>
      <Select name="categories" id="categories" onChange={onCategoryChange}>
        {categories.map(category => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>
        ))}
      </Select>

      <Label htmlFor="categories">Select subcategory</Label>
      <Select
        name="subcategories"
        id="subcategories"
        onChange={onCategoryChange}
      >
        {subcategories.map(category => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>
        ))}
      </Select>

      <Label htmlFor="description">Description</Label>
      <TextArea
        rows="10"
        title="description"
        id="description"
        value={description}
        onChange={e => setDescription(e.target.value.trim())}
      />
      <Label htmlFor="startingBid">Starting bid</Label>
      <Input
        type="number"
        title="startingBid"
        id="startingBid"
        value={startingBid}
        onChange={e => setStartingBid(e.target.value.trim())}
      />
      <Label htmlFor="image">Image of the item</Label>
      {imagePreviewURL && (
        <ImageContainer>
          <Image src={imagePreviewURL} alt="Upload Preview" />
        </ImageContainer>
      )}
      <input
        type="file"
        name="image"
        id="image"
        onChange={e => {
          if (e.target.files[0]) {
            setImage(e.target.files[0]);
            setImagePreviewURL(URL.createObjectURL(e.target.files[0]));
          }
        }}
      />
      <Button type="submit">Place Item</Button>
    </FormWrapper>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(SellForm);
