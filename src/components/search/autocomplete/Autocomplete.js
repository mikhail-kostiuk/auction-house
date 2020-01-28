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
        <SearchIcon />
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
