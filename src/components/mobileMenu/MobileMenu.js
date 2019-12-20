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
  const [previousCategories, setPreviousCategories] = useState([]);
  const [activeHeaderTitle, setActiveHeaderTitle] = useState("Categories");
  const [previousHeaderTitles, setPreviousHeaderTitles] = useState([]);

  function changeCategories(name) {
    const category = activeCategories.filter(
      category => category.name === name
    );

    setPreviousCategories([...previousCategories, activeCategories]);
    setActiveCategories(category[0].categories);

    setPreviousHeaderTitles([...previousHeaderTitles, activeHeaderTitle]);
    setActiveHeaderTitle(category[0].name);
  }

  function showPreviousCategories() {
    const updatedPreviousCategories = [...previousCategories];
    const latestPreviousCategories = updatedPreviousCategories.pop();
    const updatedPreviousHeaderTitles = [...previousHeaderTitles];
    const latestPreviousTitle = updatedPreviousHeaderTitles.pop();

    setActiveCategories(latestPreviousCategories);
    setPreviousCategories(updatedPreviousCategories);

    setActiveHeaderTitle(latestPreviousTitle);
    setPreviousHeaderTitles(updatedPreviousHeaderTitles);
  }

  return (
    <Menu>
      <Header>
        <HeaderTitle>{activeHeaderTitle}</HeaderTitle>
        {previousCategories.length > 0 && (
          <BackButton onClick={showPreviousCategories}>
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
      <MenuList>
        {activeCategories.map(category => {
          const name = category.name;

          if (category.categories.length === 0) {
            return (
              <MenuListItem key={name}>
                <MenuListLink href="#">{name}</MenuListLink>
              </MenuListItem>
            );
          } else {
            return (
              <MenuListItem key={name} onClick={() => changeCategories(name)}>
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
          }
        })}
      </MenuList>
    </Menu>
  );
}

export default MobileMenu;
