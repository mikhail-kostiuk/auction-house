import React, { useState } from "react";
import categories from "../../data/categories.json";
import {
  Menu,
  Header,
  HeaderTitle,
  ArrowIcon,
  CloseButton,
  CloseIcon,
  BackButton,
  BackIcon,
  MenuList,
  MenuListItem,
  MenuListLink,
} from "./MobileMenuStyles";

function MobileMenu(props) {
  const [activeCategories, setActiveCategories] = useState(categories);
  const [activeSubcategories, setActiveSubcategories] = useState(null);
  const [headerTitle, setHeaderTitle] = useState("All categories");

  function showSubcategories(name) {
    const category = categories.filter(category => category.name === name)[0];

    setActiveCategories(null);
    setActiveSubcategories(category.subcategories);
    setHeaderTitle(category.name);
  }

  function showAllCategories() {
    setActiveCategories(categories);
    setActiveSubcategories(null);
    setHeaderTitle("All categories");
  }

  return (
    <Menu>
      <Header>
        <HeaderTitle>{headerTitle}</HeaderTitle>
        {activeSubcategories && (
          <BackButton onClick={showAllCategories}>
            <BackIcon
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
              fill="currentColor"
            >
              <path d="M0,7" />
              <path d="M1.41,8.41,7,14l1.41-1.41L2.82,7,8.41,1.41,7,0,1.41,5.59,0,7" />
            </BackIcon>
            Back
          </BackButton>
        )}
        <CloseButton onClick={props.closeMenu}>
          <CloseIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
            fill="currentColor"
          >
            <path d="M14,1.41,12.59,0,7,5.59,1.41,0,0,1.41,5.59,7,0,12.59,1.41,14,7,8.41,12.59,14,14,12.59,8.41,7Z" />
          </CloseIcon>
        </CloseButton>
      </Header>
      {activeCategories && (
        <MenuList>
          {categories.map(category => {
            const name = category.name;

            return (
              <MenuListItem key={name} onClick={() => showSubcategories(name)}>
                {name}
                <ArrowIcon
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                  fill="currentColor"
                >
                  <path d="M8.41,7" />
                  <path d="M7,5.59,1.41,0,0,1.41,5.59,7,0,12.59,1.41,14,7,8.41,8.41,7" />
                </ArrowIcon>
              </MenuListItem>
            );
          })}
        </MenuList>
      )}
      {activeSubcategories && (
        <MenuList>
          {activeSubcategories.map(category => {
            const name = category.name;

            return (
              <MenuListItem key={name}>
                <MenuListLink href="#">{name}</MenuListLink>
              </MenuListItem>
            );
          })}
        </MenuList>
      )}
    </Menu>
  );
}

export default MobileMenu;
