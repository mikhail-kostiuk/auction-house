import React from "react";
import { connect } from "react-redux";
import { setCategory, setSubcategory } from "../../../actions/categoryActions";
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
          const name = category.name;
          return (
            <NavigationListItem key={category.name}>
              <NavigationLink
                onClick={() => {
                  props.setCategory(name);
                }}
                to="/explore"
              >
                {category.name}
              </NavigationLink>
              <NavigationNestedList>
                {category.subcategories.map(subcategory => {
                  const name = subcategory.name;
                  return (
                    <NavigationNestedListItem key={name}>
                      <NavigationNestedLink
                        onClick={() => {
                          props.setSubcategory(name);
                        }}
                        to="/explore"
                      >
                        {name}
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
  setCategory,
  setSubcategory,
})(Navigation);
