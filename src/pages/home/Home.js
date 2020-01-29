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
import image1 from "../../assets/images/Archaeology.png";
import image2 from "../../assets/images/Art.png";
import image3 from "../../assets/images/Books.png";
import image4 from "../../assets/images/Vehicles.png";
import image5 from "../../assets/images/Coins.png";
import image6 from "../../assets/images/Gemstones.png";
import image7 from "../../assets/images/Jewellery.png";
import image8 from "../../assets/images/Watches.png";
import image9 from "../../assets/images/Models.png";
import image10 from "../../assets/images/Alcohol.png";

import {
  PageContent,
  SliderContainer,
  SectionHeader,
  PopularCategoriesContainer,
  PopularCategory,
  AllCategoriesContainer,
  Category,
  CategoryLink,
  CategoryImage,
  CategoryTitle,
} from "./HomeStyles";

function Home(props) {
  return (
    <PageTemplate>
      <PageContent>
        <SliderContainer>
          <Slider title="Auctions closing soon" order="endDate" delay={5000} />
        </SliderContainer>
        <SectionHeader>Popular categories</SectionHeader>
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
          <Slider title="Be first to bid" order="bidsCount" delay={7000} />
        </SliderContainer>
        <SectionHeader>Explore all categories</SectionHeader>
        <AllCategoriesContainer>
          <Category>
            <CategoryLink
              onClick={() => {
                props.setCategories({
                  category: "Archaeology",
                  subcategory: null,
                });
              }}
              to="/explore"
            >
              <CategoryImage src={image1} />
              <CategoryTitle>Archaeology</CategoryTitle>
            </CategoryLink>
          </Category>
          <Category>
            <CategoryLink
              onClick={() => {
                props.setCategories({
                  category: "Art",
                  subcategory: null,
                });
              }}
              to="/explore"
            >
              <CategoryImage src={image2} />
              <CategoryTitle>Art</CategoryTitle>
            </CategoryLink>
          </Category>
          <Category>
            <CategoryLink
              onClick={() => {
                props.setCategories({
                  category: "Books",
                  subcategory: null,
                });
              }}
              to="/explore"
            >
              <CategoryImage src={image3} />
              <CategoryTitle>Books</CategoryTitle>
            </CategoryLink>
          </Category>
          <Category>
            <CategoryLink
              onClick={() => {
                props.setCategories({
                  category: "Vehicles",
                  subcategory: null,
                });
              }}
              to="/explore"
            >
              <CategoryImage src={image4} />
              <CategoryTitle>Vehicles</CategoryTitle>
            </CategoryLink>
          </Category>
          <Category>
            <CategoryLink
              onClick={() => {
                props.setCategories({
                  category: "Coins",
                  subcategory: null,
                });
              }}
              to="/explore"
            >
              <CategoryImage src={image5} />
              <CategoryTitle>Coins</CategoryTitle>
            </CategoryLink>
          </Category>
          <Category>
            <CategoryLink
              onClick={() => {
                props.setCategories({
                  category: "Gemstones",
                  subcategory: null,
                });
              }}
              to="/explore"
            >
              <CategoryImage src={image6} />
              <CategoryTitle>Gemstones</CategoryTitle>
            </CategoryLink>
          </Category>
          <Category>
            <CategoryLink
              onClick={() => {
                props.setCategories({
                  category: "Jewellery",
                  subcategory: null,
                });
              }}
              to="/explore"
            >
              <CategoryImage src={image7} />
              <CategoryTitle>Jewellery</CategoryTitle>
            </CategoryLink>
          </Category>
          <Category>
            <CategoryLink
              onClick={() => {
                props.setCategories({
                  category: "Watches",
                  subcategory: null,
                });
              }}
              to="/explore"
            >
              <CategoryImage src={image8} />
              <CategoryTitle>Watches</CategoryTitle>
            </CategoryLink>
          </Category>
          <Category>
            <CategoryLink
              onClick={() => {
                props.setCategories({
                  category: "Models",
                  subcategory: null,
                });
              }}
              to="/explore"
            >
              <CategoryImage src={image9} />
              <CategoryTitle>Models</CategoryTitle>
            </CategoryLink>
          </Category>
          <Category>
            <CategoryLink
              onClick={() => {
                props.setCategories({
                  category: "Alcohol",
                  subcategory: null,
                });
              }}
              to="/explore"
            >
              <CategoryImage src={image10} />
              <CategoryTitle>Alcohol</CategoryTitle>
            </CategoryLink>
          </Category>
        </AllCategoriesContainer>
      </PageContent>
    </PageTemplate>
  );
}

const mapStateToProps = state => {
  return { category: state.category };
};

export default connect(mapStateToProps, { setCategories })(Home);
