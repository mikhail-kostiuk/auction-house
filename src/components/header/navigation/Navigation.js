import React from "react";
import { connect } from "react-redux";
import { setCategories } from "../../../actions/categoryActions";
import navigationData from "../../../data/categories.json";
import {
  NavigationWrapper,
  NavigationList,
  NavigationListItem,
  NavigationLink,
  NavigationNestedList,
  NavigationNestedListItem,
  NavigationNestedLink,
} from "./NavigationStyles";

function Navigation(props) {
  return (
    <NavigationWrapper>
      <NavigationList>
        {navigationData.map(category => {
          return (
            <NavigationListItem key={category.name}>
              <NavigationLink
                onClick={() => {
                  props.setCategories({
                    category: category.name,
                    subcategory: null,
                  });
                }}
                to="/explore"
              >
                {category.name}
              </NavigationLink>
              <NavigationNestedList>
                {category.subcategories.map(subcategory => {
                  return (
                    <NavigationNestedListItem key={subcategory.name}>
                      <NavigationNestedLink
                        onClick={() => {
                          props.setCategories({
                            category: category.name,
                            subcategory: subcategory.name,
                          });
                        }}
                        to="/explore"
                      >
                        {subcategory.name}
                      </NavigationNestedLink>
                    </NavigationNestedListItem>
                  );
                })}
              </NavigationNestedList>
            </NavigationListItem>
          );
        })}
      </NavigationList>
    </NavigationWrapper>
  );
}

export default connect(null, {
  setCategories,
})(Navigation);
