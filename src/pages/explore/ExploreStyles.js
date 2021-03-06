import styled from "styled-components";

export const PageContent = styled.div`
  display: flex;
  width: 100%;
`;

export const SidebarContainer = styled.div`
  display: none;
  flex-shrink: 0;
  width: 210px;
  padding-top: 14px;
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
