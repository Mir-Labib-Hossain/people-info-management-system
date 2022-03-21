import React from "react";
import ListBlock from "./listBlock-view";

export interface ListBlockState {
  person: {
    name: string;
    age: number;
    url: string;
    note?: string;
  },
  index:number
}
const index = ({ person, index }:ListBlockState) => {
  return <ListBlock person={person} index={index} />;
};
export default index;
