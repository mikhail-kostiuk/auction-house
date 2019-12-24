import React, { useState } from "react";
import categories from "../../data/categories.json";
import { FormWrapper, Label } from "./SellFormStyles.js";

function SellForm() {
  const tomorrow = new Date();

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

  return (
    <FormWrapper method="post">
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
      <input type="file" name="image" id="image" />
      <button type="submit">Place Item</button>
    </FormWrapper>
  );
}

export default SellForm;
