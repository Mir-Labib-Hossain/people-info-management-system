import React from "react";
import Form from "../Form";
import List from "../List";
import { MainState as MainProps } from "./index";
import { Main,H1 } from "./styled";
const main_view: React.FC<MainProps> = ({ people, setPeople }): JSX.Element => {
  return (
    <Main>
      <H1>Our Info list:</H1>
      <List people={people} />
      <Form people={people} setPeople={setPeople} />
    </Main>
  );
};
export default main_view;
