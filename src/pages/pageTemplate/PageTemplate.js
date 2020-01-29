import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import {
  Page,
  PageContainer,
  PageContentContainer,
  PageTitle,
  FooterContainer,
} from "./PageTemplateStyles";

function PageTemplate(props) {
  const { pageTitle } = props;
  return (
    <PageContainer>
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
    </PageContainer>
  );
}

export default PageTemplate;
