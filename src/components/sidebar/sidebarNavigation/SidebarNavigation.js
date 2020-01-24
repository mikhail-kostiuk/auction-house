import React from "react";
import { connect } from "react-redux";
import {
  Navigation,
  NavigationList,
  NavigationListItem,
  ArrowIcon,
  BackButton,
  BackIcon,
} from "./SidebarNavigationStyles";
import { setCategories } from "../../../actions/categoryActions";
import categories from "../../../data/categories.json";

function SidebarNavigation(props) {
  const selectedCategories = props.category;
  const activeCategories = selectedCategories.category ? null : categories;
  const activeSubcategories = selectedCategories.category
    ? categories.filter(
        category => category.name === selectedCategories.category
      )[0].subcategories
    : null;

  return (
    <Navigation>
      {activeSubcategories && (
        <BackButton
          onClick={() => {
            // showAllCategories();
            props.setCategories({ category: null, subcategory: null });
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
            return (
              <NavigationListItem
                key={category.name}
                onClick={() => {
                  // showSubcategories(name);
                  props.setCategories({
                    category: category.name,
                    subcategory: null,
                  });
                }}
              >
                {category.name}
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
            return (
              <NavigationListItem
                key={subcategory.name}
                onClick={() => {
                  props.setCategories({
                    category: selectedCategories.category,
                    subcategory: subcategory.name,
                  });
                }}
              >
                {subcategory.name}
              </NavigationListItem>
            );
          })}
        </NavigationList>
      )}
    </Navigation>
  );
}

const mapStateToProps = state => {
  return {
    category: state.category,
  };
};

export default connect(mapStateToProps, {
  setCategories,
})(SidebarNavigation);
