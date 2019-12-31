import styled from "styled-components";

export const PageContentContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;

  @media screen and (min-width: 768px) {
    padding: 10px 20px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1240px;
    margin: 0 auto;
  }
`;
export const PageContent = styled.div`
  display: flex;
`;

export const SidebarContainer = styled.div`
  flex-shrink: 0;
  width: 210px;
`;
