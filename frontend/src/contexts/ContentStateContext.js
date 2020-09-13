import React, { createContext, useState } from 'react';

export const ContentStateContext = createContext(null);

function ContentStateContextProvider(props) {
  const [contentState, setContentState] = useState(null);
  return (
    <ContentStateContext.Provider value={{contentState, setContentState}}>
      {props.children}
    </ContentStateContext.Provider>
  );
}

export default ContentStateContextProvider;