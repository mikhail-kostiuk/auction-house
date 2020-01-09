import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Navigation,
  NavigationList,
  NavigationListItem,
  ArrowIcon,
  BackButton,
  BackIcon,
} from "./SidebarNavigationStyles";
import { setCategory, setSubcategory } from "../../../actions/categoryActions";
import categories from "../../../data/categories.json";

function SidebarNavigation(props) {
  const [activeCategories, setActiveCategories] = useState(categories);
  const [activeSubcategories, setActiveSubcategories] = useState(null);

  function showSubcategories(name) {
    const category = categories.filter(category => category.name === name)[0];

    setActiveCategories(null);
    setActiveSubcategories(category.subcategories);
  }

  function showAllCategories() {
    setActiveCategories(categories);
    setActiveSubcategories(null);
    props.setCategory(null);
  }

  return (
    <Navigation>
      {activeSubcategories && (
        <BackButton
          onClick={() => {
            showAllCategories();
            props.setCategory(null);
          }}
        >
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
      {activeCategories && (
        <NavigationList>
          {categories.map(category => {
            const name = category.name;

            return (
              <NavigationListItem
                key={name}
                onClick={() => {
                  showSubcategories(name);
                  props.setCategory(name);
                }}
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
          })}
        </NavigationList>
      )}
      {activeSubcategories && (
        <NavigationList nested>
          {activeSubcategories.map(subcategory => {
            const name = subcategory.name;

            return (
              <NavigationListItem
                key={name}
                onClick={() => {
                  props.setSubcategory(name);
                }}
              >
                {name}
              </NavigationListItem>
            );
          })}
        </NavigationList>
      )}
    </Navigation>
  );
}

export default connect(null, {
  setCategory,
  setSubcategory,
})(SidebarNavigation);
