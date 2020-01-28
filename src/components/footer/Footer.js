import React from "react";
import {
  FooterWrapper,
  ContentContainer,
  SocialMediaContainer,
  SocialMediaLink,
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
  Copyright,
} from "./FooterStyles";

function Footer() {
  return (
    <FooterWrapper>
      <ContentContainer>
        <SocialMediaContainer>
          <SocialMediaLink href="https://www.facebook.com/">
            <FacebookIcon />
          </SocialMediaLink>
          <SocialMediaLink href="https://www.twitter.com/">
            <TwitterIcon />
          </SocialMediaLink>
          <SocialMediaLink href="https://www.pinterest.com/">
            <PinterestIcon />
          </SocialMediaLink>
        </SocialMediaContainer>
        <Copyright>© 2019-2020 AuctionHouse. All Rights Reserved.</Copyright>
      </ContentContainer>
    </FooterWrapper>
  );
}

export default Footer;
