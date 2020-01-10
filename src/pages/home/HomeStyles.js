import styled from "styled-components";

export const PageContent = styled.div`
  display: flex;
  width: 100%;
`;

export const SidebarContainer = styled.div`
  flex-shrink: 0;
  width: 210px;

  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;
