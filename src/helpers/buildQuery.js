import { firestore } from "../firebase";

export const buildBasicQuery = (sortOrder, selectedCategories) => {
  let query;

  const itemsRef = firestore
    .collection("lots")
    .doc("active")
    .collection("items");

  let sortField;
  let sortDirection;

  switch (sortOrder) {
    case "TIME_FURTHEST":
      sortField = "endDate";
      sortDirection = "desc";
      break;
    case "TIME_SOONEST":
      sortField = "endDate";
      sortDirection = "asc";
      break;
    case "PRICE_HIGHEST":
      sortField = "currentBid";
      sortDirection = "desc";
      break;
    case "PRICE_LOWEST":
      sortField = "currentBid";
      sortDirection = "asc";
      break;

    default:
      break;
  }

  if (selectedCategories.category) {
    query = itemsRef
      .orderBy(sortField, sortDirection)
      .where("category", "==", selectedCategories.category);
  } else if (selectedCategories.subcategory) {
    query = itemsRef
      .orderBy(sortField, sortDirection)
      .where("subcategory", "==", selectedCategories.subcategory);
  } else {
    query = itemsRef.orderBy(sortField, sortDirection);
  }

  return query;
};
