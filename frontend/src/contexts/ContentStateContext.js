import React, { createContext, useState } from 'react';

export const ContentStateContext = createContext("nav-about");

function ContentStateContextProvider(props) {
  const [contentState, setContentState] = useState("nav-about");
  return (
    <ContentStateContext.Provider value={{contentState, setContentState}}>
      {props.children}
    </ContentStateContext.Provider>
  );
}

export default ContentStateContextProvider;