import styled from "styled-components";

export const SliderWrapper = styled.div`
  &:hover button {
    display: flex;
  }
`;

export const Title = styled.h2`
  margin: 20px 0 10px 0;
  background-color: #fff;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.5px;

  @media screen and (min-width: 768px) {
    margin: 30px 0 20px 0;
  }
`;

export const SlideContainer = styled.li`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
  height: 330px;
  padding: 10px;
  border: 1px solid ${props => props.theme.bluegrey8};
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

export const List = styled.ul`
  position: relative;
  display: flex;
  overflow-x: hidden;
  padding: 10px 0;
  margin: 0;
  list-style-type: none;

  ${SlideContainer}:first-of-type {
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

export const ArrowButton = styled.button`
  position: absolute;
  top: 10px;
  display: none;
  justify-content: space-around;
  width: 40px;
  height: 330px;
  padding: 0;
  border: none;
  background-color: rgba(255, 255, 255, 0.7);
  color: ${props => props.theme.blue5};
  font: inherit;
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
  width: 30px;
  height: 30px;
`;