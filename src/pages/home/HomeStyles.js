import styled from "styled-components";
import { Link } from "react-router-dom";
// import bg from "../../assets/images/Ancient_Art_&_Antiquitie.jpg";
// import bg from "../../assets/images/Archaeology.jpg";

export const PageContent = styled.div`
  /* display: flex; */
  /* width: 100%; */
`;

export const SidebarContainer = styled.div`
  display: none;
  flex-shrink: 0;
  width: 210px;
  padding-top: 30px;
  margin-right: 30px;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const GalleryContainer = styled.div`
  width: 100%;
`;

export const PaginationContainer = styled.div`
  margin-top: 30px;
`;

export const SliderContainer = styled.div`
  width: 100%;
`;

export const SectionHeader = styled.h2`
  margin: 20px 0 14px 0;
  background-color: #fff;
  color: ${props => props.theme.blue1};
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin: 30px 0 24px 0;
  }
`;

export const PopularCategoriesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const PopularCategory = styled(Link)`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;
  width: 49%;
  background-image: ${props => props.bg};
  background-size: cover;
  background-position: center;
  font-weight: 400;
  color: #fff;
  text-decoration: none;
  letter-spacing: 1px;
  text-align: center;
  font-size: 18px;

  @media screen and (min-width: 768px) {
    width: 24%;
  }
`;

export const AllCategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Category = styled.div`
  width: 50%;
  padding: 10px;

  @media screen and (min-width: 768px) {
    width: 33%;
    padding: 20px;
  }
`;

export const CategoryLink = styled(Link)`
  display: block;
  cursor: pointer;
`;

export const CategoryImage = styled.img`
  width: 100%;
  padding: 0 10%;
  margin: 0 auto;
  border-bottom: 3px solid ${props => props.theme.bluegrey8};
  display: block;

  @media screen and (min-width: 768px) {
    padding: 0 10%;
  }
`;

export const CategoryTitle = styled.h2`
  margin: 0;
  margin-top: 8px;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
