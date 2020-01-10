import React from "react";
import {
  PageContent,
  ContactsColumn,
  Intro,
  ContactTitle,
  ContactText,
  Map,
} from "./ContactsStyles";
import PageTemplate from "../pageTemplate/PageTemplate";

function Contacts() {
  return (
    <PageTemplate pageTitle="Contact Us">
      <PageContent>
        <ContactsColumn>
          <Intro>
            If you are interested in any of the services we provide or have any
            questions, contact us. We would love to talk to you about the best
            way to solve your problems.
          </Intro>
          <ContactTitle>Phone numbers</ContactTitle>
          <ContactText>+1-202-555-0150</ContactText>
          <ContactText>+1-202-555-0126</ContactText>
          <ContactText>+1-202-555-0116</ContactText>
          <ContactTitle>Email address</ContactTitle>
          <ContactText>auctionhouse@gmail.com</ContactText>
          <ContactTitle>Mailing address</ContactTitle>
          <ContactText>9795 Randall Mill Road Brooklyn, NY 11236</ContactText>
          <ContactTitle>Auction house address</ContactTitle>
          <ContactText>9902 Homewood Street Bronx, NY 10452</ContactText>
        </ContactsColumn>
        <Map>
          <iframe
            title="office address"
            width="600"
            height="480"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=240%20East%2C%2049th%20Street%20New%20York%2C%20NY%2010017&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </Map>
      </PageContent>
    </PageTemplate>
  );
}

export default Contacts;
