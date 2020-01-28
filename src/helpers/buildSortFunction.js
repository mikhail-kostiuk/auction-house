export const buildSortFunction = sortOrder => {
  let sortFunction;
  switch (sortOrder) {
    case "TIME_FURTHEST":
      sortFunction = (a, b) => b.endDate - a.endDate;
      break;
    case "TIME_SOONEST":
      sortFunction = (a, b) => a.endDate - b.endDate;
      break;
    case "PRICE_HIGHEST":
      sortFunction = (a, b) => b.currentBid - a.currentBid;
      break;
    case "PRICE_LOWEST":
      sortFunction = (a, b) => a.currentBid - b.currentBid;
      break;

    default:
      break;
  }
  return sortFunction;
};
