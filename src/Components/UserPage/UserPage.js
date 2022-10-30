import NavBarUserPage from "./NavBarUserPage";
import UserMenu from "./UserMenu";
import WelcomePage from "./WelcomePage";
import NewsPage from "./NewsPage";
import SubjectsView from "./TreeView/SubjectsView";
import QuestPage from "./QuestPage";
import GuildPage from "./GuildPage";
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import AwardsPage from "./AwardsPage";
import DemoPage from "./DemoPage";

export default function UserPage() {
  const [Elem, setElem] = useState("h");
  const changePage = (page) => {
    setElem(page);
  };
  return (
    <div className="">
      <UserMenu />
      <NavBarUserPage changePage={changePage} />
      <div className="z-0 ml-[8.333%] w-11/12">
        {Elem === "h" ? (
          <WelcomePage />
        ) : Elem === "n" ? (
          <NewsPage />
        ) : Elem === "q" ? (
          <QuestPage />
        ) : Elem === "g" ? (
          <GuildPage />
        ) : Elem === "a" ? (
          <AwardsPage />
        ) : Elem === "d" ? (
          <DemoPage />
        ) : (
          <SubjectsView />
        )}
      </div>
    </div>
  );
}
