import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import {
  Page,
  PageContentContainer,
  PageTitle,
  FooterContainer,
} from "./PageTemplateStyles";

function PageTemplate(props) {
  const { pageTitle } = props;
  return (
    <Page>
      <Header />
      <PageContentContainer>
        {pageTitle && <PageTitle>{props.pageTitle}</PageTitle>}
        {props.children}
      </PageContentContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Page>
  );
}

export default PageTemplate;
