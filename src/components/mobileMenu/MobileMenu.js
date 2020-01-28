import React, { useState } from "react";
import { connect } from "react-redux";
import { setCategories } from "../../actions/categoryActions";
import categories from "../../data/categories.json";
import { ReactComponent as ArrowIcon } from "../../assets/svg/arrow.svg";
import {
  Menu,
  Header,
  HeaderTitle,
  CloseButton,
  CloseIcon,
  BackButton,
  BackIcon,
  MenuList,
  MenuListItem,
  MenuListLink,
  NextIcon,
  ViewAllLink,
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
            <BackIcon />
            Back
          </BackButton>
        )}
        <CloseButton onClick={props.closeMenu}>
          <CloseIcon />
        </CloseButton>
      </Header>
      {activeCategories && (
        <MenuList>
          <MenuListItem key="viewAll">
            <ViewAllLink
              onClick={() => {
                props.closeMenu();
                props.setCategories({ category: null, subcategory: null });
              }}
              to="/explore"
            >
              View all
            </ViewAllLink>
          </MenuListItem>
          {categories.map(category => {
            const name = category.name;

            return (
              <MenuListItem key={name} onClick={() => showSubcategories(name)}>
                {name}
                <NextIcon>
                  <ArrowIcon />
                </NextIcon>
              </MenuListItem>
            );
          })}
        </MenuList>
      )}
      {activeSubcategories && (
        <MenuList>
          <MenuListItem key="viewAll">
            <ViewAllLink
              onClick={() => {
                props.closeMenu();
                props.setCategories({
                  category: headerTitle,
                  subcategory: null,
                });
              }}
              to="/explore"
            >
              View all
            </ViewAllLink>
          </MenuListItem>
          {activeSubcategories.map(category => {
            const name = category.name;

            return (
              <MenuListItem key={name}>
                <MenuListLink
                  onClick={() => {
                    props.closeMenu();
                    props.setCategories({
                      category: headerTitle,
                      subcategory: name,
                    });
                  }}
                  to="/explore"
                >
                  {name}
                </MenuListLink>
              </MenuListItem>
            );
          })}
        </MenuList>
      )}
    </Menu>
  );
}

export default connect(null, {
  setCategories,
})(MobileMenu);
