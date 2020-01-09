import React from "react";
import navigationData from "../../../data/categories.json";
import {
  NavigationWrapper,
  NavigationList,
  NavigationNestedList,
  NavigationListItem,
  NavigationLink,
} from "./NavigationStyles";

function Navigation() {
  return (
    <NavigationWrapper>
      <NavigationList>
        {navigationData.map(category => (
          <NavigationListItem key={category.name}>
            <NavigationLink href="#">{category.name}</NavigationLink>
            <NavigationNestedList>
              {category.subcategories.map(subcategory => (
                <li key={subcategory.name}>
                  <NavigationLink href="#">{subcategory.name}</NavigationLink>
                </li>
              ))}
            </NavigationNestedList>
          </NavigationListItem>
        ))}
      </NavigationList>
    </NavigationWrapper>
  );
}

export default Navigation;
