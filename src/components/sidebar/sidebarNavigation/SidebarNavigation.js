import React from "react";
import { connect } from "react-redux";
import {
  Navigation,
  NavigationList,
  NavigationListItem,
  BackButton,
  BackIcon,
  NextIcon,
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
          <BackIcon />
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
                <NextIcon />
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
