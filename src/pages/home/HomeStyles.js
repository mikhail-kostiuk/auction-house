import styled from "styled-components";

export const PageContent = styled.div`
  display: flex;
  width: 100%;
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
