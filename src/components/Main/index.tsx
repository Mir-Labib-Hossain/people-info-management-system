import React, { useState } from "react";
import GlobalStyle from "../../Global.styled";
import MainView from "./main-view";
export interface MainState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
  setPeople: React.Dispatch<React.SetStateAction<MainState["people"]>>;
}
function Main() {
  // list of already existing people
  const [people, setPeople] = useState<MainState["people"]>([
    {
      name: "Mir Labib Hossain",
      age: 22,
      url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/06fbe298931623.5ee79b6a90221.jpg",
      note: "An FRONTEND developer @ TECHETRON VENTURES LTD.",
    },
    {
      name: "Jaber Al Rafian",
      age: 26,
      url: "https://pbs.twimg.com/media/EbmbKYwWsAAN6be.jpg",
      note: "An BACKEND developer @ TECHETRON VENTURES LTD.",
    },
    {
      name: "Debashish Saha",
      age: 27,
      url: "https://pbs.twimg.com/media/EbNX_erVcAUlwIx.jpg",
      note: "An BACKEND developer @ TECHETRON VENTURES LTD.",
    },
  ]);
  return (
    <>
      <GlobalStyle />
      <MainView people={people} setPeople={setPeople} />
    </>
  );
}

export default Main;
