import React from "react";
import Navigation from "./Navigation.js";
import Content from "./Content.js";
import ContentStateContextProvider from "../contexts/ContentStateContext.js";

function Middle() {
  return (
    <div className="middle">
      <ContentStateContextProvider>
        <Navigation />
        <Content />
      </ContentStateContextProvider>
    </div>
  );
}

export default Middle;