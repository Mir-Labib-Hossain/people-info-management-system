import React from "react";
import { ListState as ListProps } from "./index";
import ListBlock from "../ListBlock";
import ListContainer from "./styled";
const List: React.FC<ListProps> = ({ people }): JSX.Element => {
  function renderList(): JSX.Element[] {
    return people.map((person, index) => {
      return <ListBlock person={person} index={index} />;
    });
  }
  return <ListContainer> {renderList()}</ListContainer>;
};
export default List;
