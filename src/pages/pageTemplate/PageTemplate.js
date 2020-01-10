import React from "react";
import Header from "../../components/header/Header";
import { Page, PageContentContainer, PageTitle } from "./PageTemplateStyles";

function PageTemplate(props) {
  const { pageTitle } = props;
  return (
    <Page>
      <Header />
      <PageContentContainer>
        {pageTitle && <PageTitle>{props.pageTitle}</PageTitle>}
        {props.children}
      </PageContentContainer>
    </Page>
  );
}

export default PageTemplate;
