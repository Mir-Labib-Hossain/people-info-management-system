import React from "react";
import ListView from "./list-view";
export interface ListState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}
const List: React.FC<ListState> = ({ people }) => {
  return <ListView people={people}  />;
};
export default List;
