import React, { useState } from "react";
import {
  Navigation,
  NavigationList,
  NavigationListItem,
  ArrowIcon,
  BackButton,
  BackIcon,
} from "./SidebarNavigationStyles";
import categories from "../../../data/categories.json";

function SidebarNavigation() {
  const [activeCategories, setActiveCategories] = useState(categories);
  const [previousCategories, setPreviousCategories] = useState([]);
  const [previousCategoryName, setPreviousCategoryName] = useState(null);
  const [previousCategoriesNames, setPreviousCategoriesNames] = useState([]);

  function changeCategories(name) {
    const category = activeCategories.filter(
      category => category.name === name
    )[0];

    setPreviousCategories([...previousCategories, activeCategories]);
    setActiveCategories(category.categories);

    setPreviousCategoryName(category.name);
    setPreviousCategoriesNames([...previousCategoriesNames, category.name]);
  }

  function showPreviousCategories() {
    const updatedPreviousCategories = [...previousCategories];
    const lastPreviousCategories = updatedPreviousCategories.pop();
    const updatedPreviousCategoriesNames = [...previousCategoriesNames];
    updatedPreviousCategoriesNames.pop();

    setActiveCategories(lastPreviousCategories);
    setPreviousCategories(updatedPreviousCategories);

    setPreviousCategoriesNames(updatedPreviousCategoriesNames);
    setPreviousCategoryName(
      updatedPreviousCategoriesNames[updatedPreviousCategoriesNames.length - 1]
    );
  }

  function showAllCategories() {
    setActiveCategories(previousCategories[0]);
    setPreviousCategories([]);
    setPreviousCategoryName(null);
    setPreviousCategoriesNames([]);
  }

  return (
    <Navigation>
      {previousCategories.length > 1 && (
        <BackButton onClick={showAllCategories}>
          <BackIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
            fill="currentColor"
          >
            <path d="M0,7" />
            <path d="M1.41,8.41,7,14l1.41-1.41L2.82,7,8.41,1.41,7,0,1.41,5.59,0,7" />
          </BackIcon>
          All Categories
        </BackButton>
      )}
      {previousCategoryName && (
        <BackButton onClick={showPreviousCategories}>
          <BackIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
            fill="currentColor"
          >
            <path d="M0,7" />
            <path d="M1.41,8.41,7,14l1.41-1.41L2.82,7,8.41,1.41,7,0,1.41,5.59,0,7" />
          </BackIcon>
          {previousCategoryName}
        </BackButton>
      )}
      <NavigationList withMargin={previousCategoryName}>
        {activeCategories.map(category => {
          const name = category.name;

          if (category.categories.length === 0) {
            return <NavigationListItem key={name}>{name}</NavigationListItem>;
          } else {
            return (
              <NavigationListItem
                key={name}
                onClick={() => changeCategories(name)}
              >
                {name}
                <ArrowIcon
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                  fill="currentColor"
                >
                  <path d="M8.41,7" />
                  <path d="M7,5.59,1.41,0,0,1.41,5.59,7,0,12.59,1.41,14,7,8.41,8.41,7" />
                </ArrowIcon>
              </NavigationListItem>
            );
          }
        })}
      </NavigationList>
    </Navigation>
  );
}

export default SidebarNavigation;
