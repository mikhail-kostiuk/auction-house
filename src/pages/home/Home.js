import React from "react";
import { connect } from "react-redux";
import { setCategories } from "../../actions/categoryActions";
import PageTemplate from "../pageTemplate/PageTemplate";
import Slider from "../../components/slider/Slider";
import bg1 from "../../assets/images/Ancient_Art_&_Antiquitie.jpg";
import bg2 from "../../assets/images/Classical_Paintings.jpg";
import bg3 from "../../assets/images/Dutch_Cartography.jpg";
import bg4 from "../../assets/images/Motobilia.jpg";
import bg5 from "../../assets/images/Asian_Coins.jpg";
import bg6 from "../../assets/images/Diamonds.jpg";
import bg7 from "../../assets/images/Antique_Jewellery.jpg";
import bg8 from "../../assets/images/Rolex_Watches.jpg";

import {
  PageContent,
  SliderContainer,
  SectionHeader,
  PopularCategoriesContainer,
  PopularCategory,
} from "./HomeStyles";

function Home(props) {
  return (
    <PageTemplate>
      <PageContent>
        <SliderContainer>
          <Slider title="Auctions closing soon" order="endDate" />
        </SliderContainer>
        <SectionHeader>Popular Categories</SectionHeader>
        <PopularCategoriesContainer>
          <PopularCategory
            bg={`url(${bg1})`}
            onClick={() => {
              props.setCategories({
                category: "Archaeology",
                subcategory: "Ancient Art & Antiquitie",
              });
            }}
            to="/explore"
          >
            Ancient Art & Antiquitie
          </PopularCategory>
          <PopularCategory
            bg={`url(${bg2})`}
            onClick={() => {
              props.setCategories({
                category: "Art",
                subcategory: "Classical Paintings",
              });
            }}
            to="/explore"
          >
            Classical Paintings
          </PopularCategory>
          <PopularCategory
            bg={`url(${bg3})`}
            onClick={() => {
              props.setCategories({
                category: "Books",
                subcategory: "Dutch Cartography",
              });
            }}
            to="/explore"
          >
            Dutch Cartography
          </PopularCategory>
          <PopularCategory
            bg={`url(${bg4})`}
            onClick={() => {
              props.setCategories({
                category: "Vehicles",
                subcategory: "Motobilia",
              });
            }}
            to="/explore"
          >
            Motobilia
          </PopularCategory>
          <PopularCategory
            bg={`url(${bg5})`}
            onClick={() => {
              props.setCategories({
                category: "Coins",
                subcategory: "Asian Coins",
              });
            }}
            to="/explore"
          >
            Asian Coins
          </PopularCategory>
          <PopularCategory
            bg={`url(${bg6})`}
            onClick={() => {
              props.setCategories({
                category: "Gemstones",
                subcategory: "Diamonds",
              });
            }}
            to="/explore"
          >
            Diamonds
          </PopularCategory>
          <PopularCategory
            bg={`url(${bg7})`}
            onClick={() => {
              props.setCategories({
                category: "Jewellery",
                subcategory: "Antique Jewellery",
              });
            }}
            to="/explore"
          >
            Antique Jewellery
          </PopularCategory>
          <PopularCategory
            bg={`url(${bg8})`}
            onClick={() => {
              props.setCategories({
                category: "Watches",
                subcategory: "Rolex Watches",
              });
            }}
            to="/explore"
          >
            Rolex Watches
          </PopularCategory>
        </PopularCategoriesContainer>
        <SliderContainer>
          <Slider title="Be first to bid" order="bidsCount" />
        </SliderContainer>
      </PageContent>
    </PageTemplate>
  );
}

const mapStateToProps = state => {
  return { category: state.category };
};

export default connect(mapStateToProps, { setCategories })(Home);
