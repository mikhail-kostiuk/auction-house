import React, { useState } from "react";
import { connectAutoComplete } from "react-instantsearch-dom";
import {
  InputContainer,
  SearchInput,
  SearchIconContainer,
  SearchIcon,
  HitsList,
  Hit,
  ItemLink,
  ImageContainer,
  ImageWrapper,
  Image,
  Details,
  Title,
  Description,
} from "./AutocomleteStyles";

function Autocomplete({ hits, currentRefinement, refine }) {
  const [value, setValue] = useState("");
  return (
    <InputContainer>
      <SearchInput
        autocomplete="off"
        type="search"
        name="search"
        id="search"
        placeholder="Search items"
        onChange={event => {
          const value = event.currentTarget.value;
          setValue(value);
          refine(event.currentTarget.value);
        }}
      />
      <SearchIconContainer>
        <SearchIcon
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          >
          <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </SearchIcon>
      </SearchIconContainer>
      {value && (
        <HitsList>
          {hits.map(hit => {
            return (
              <Hit
                key={hit.objectID}
                onClick={() => {
                  setValue("");
                  refine("");
                }}
              >
                <ItemLink to={`/item?id=${hit.objectID}`}>
                  <ImageContainer>
                    <ImageWrapper>
                      <Image src={hit.imageUrl} alt={hit.title} />
                    </ImageWrapper>
                  </ImageContainer>
                  <Details>
                    <Title>{hit.title}</Title>
                    <Description>{hit.description}</Description>
                  </Details>
                </ItemLink>
              </Hit>
            );
          })}
        </HitsList>
      )}
    </InputContainer>
  );
}

export default connectAutoComplete(Autocomplete);
