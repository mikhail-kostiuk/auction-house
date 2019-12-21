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
  console.log(navigationData);
  return (
    <NavigationWrapper>
      <NavigationList>
        {navigationData.map(category => (
          <NavigationListItem key={category.name}>
            <NavigationLink href="#">{category.name}</NavigationLink>
            <NavigationNestedList>
              {category.categories.map(category => {
                if (
                  category.categories !== undefined &&
                  category.categories.length !== 0
                ) {
                  return (
                    <li key={category.name}>
                      <NavigationLink href="#">{category.name}</NavigationLink>
                      <ul>
                        {category.categories.map(category => (
                          <li key={category.name}>
                            <NavigationLink href="#">
                              {category.name}
                            </NavigationLink>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                } else {
                }
                return (
                  <li>
                    <NavigationLink href="#">{category.name}</NavigationLink>
                  </li>
                );
              })}
            </NavigationNestedList>
          </NavigationListItem>
        ))}
      </NavigationList>
    </NavigationWrapper>
  );
}

export default Navigation;
