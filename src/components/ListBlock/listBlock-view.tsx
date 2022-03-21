import React from "react";
import { ListBlockState as ListBlockProps } from "./index";
import { H3, Img, InfoContainer, ListBlock, P, Span } from "./styled";
const list_block_view = ({ person, index }: ListBlockProps) => {
  return (
    <ListBlock key={index}>
      <Img src={person.url} alt={person.name} />
      <InfoContainer>
        <H3>{person.name}</H3>
        <P>{person.age}</P>
      </InfoContainer>
      <Span>{person.note}</Span>
    </ListBlock>
  );
};
export default list_block_view;
