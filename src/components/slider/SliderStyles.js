import styled from "styled-components";

export const SliderWrapper = styled.div`
  &:hover button {
    display: flex;
  }
`;

export const Slide = styled.li`
  flex-shrink: 0;
  width: 100%;
  height: 360px;
  padding: 10px;
  background-color: #fff;
  transition: all ease 1s;

  @media screen and (min-width: 450px) {
    width: 49%;
    margin-right: 2%;
  }

  @media screen and (min-width: 768px) {
    width: 32%;
  }

  @media screen and (min-width: 1024px) {
    width: 23.5%;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const SliderList = styled.ul`
  position: relative;
  overflow-x: hidden;
  /* overflow-x: scroll; */
  display: flex;
  margin: 0;
  padding: 10px 0;
  list-style-type: none;

  /* @media screen and (min-width: 1200px) {
    overflow-x: hidden;
  } */

  ${Slide}:first-of-type {
    margin-left: ${props => `${props.currentSlide * -100}%`};

    @media screen and (min-width: 450px) {
      margin-left: ${props => `${props.currentSlide * -51}%`};
    }

    @media screen and (min-width: 768px) {
      margin-left: ${props => `${props.currentSlide * -34}%`};
    }

    @media screen and (min-width: 1024px) {
      margin-left: ${props => `${props.currentSlide * -25.5}%`};
    }
  }
`;

export const ItemImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  object-fit: contain;
`;

export const ItemImageContainer = styled.div`
  width: 100%;
  height: 200px;
`;

export const ItemName = styled.p`
  /* padding: 0; */
  margin: 0;
  margin-top: 12px;
  color: #000;
  border-top: 1px solid #d7d8d9;
  padding-top: 10px;
  /* text-decoration: none; */
`;

export const TimeDetails = styled.div`
  /* display: flex; */
  /* justify-content: space-between; */
  /* align-items: flex-end; */
  /* color: #525f7f; */
  /* text-decoration: none; */
`;

export const TimeLeft = styled.p`
  display: flex;
  margin: 0;
  margin-top: 10px;
  color: red;
  /* color: #525f7f; */
  /* text-decoration: none; */
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 10px;
  display: none;
  justify-content: space-around;
  width: 60px;
  height: 360px;
  padding: 0;
  border: none;
  font: inherit;
  background: rgba(255, 255, 255, 0.7);
  color: #579aff;
`;

export const ArrowButtonLeft = styled(ArrowButton)`
  &&& {
    display: ${props => (props.currentSlide === 0 ? "none" : "")};
    left: 0;
  }
`;

export const ArrowButtonRight = styled(ArrowButton)`
  &&& {
    display: ${props => (props.currentSlide === 12 ? "none" : "")};
    right: 0;
  }
`;

export const ArrowIcon = styled.svg`
  width: 40px;
  height: 40px;
`;
