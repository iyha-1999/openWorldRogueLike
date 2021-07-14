import React from "react";

//react-pixiでは別のコンテキストでラップされているようなので
//Consumerでreduxのコンテキストの変更を感知し、stageの子コンポーネントに対して再度reduxのコンテキストでラップする
const ContextBridge = ({ render, Context, children }) => (
  <Context.Consumer>
    {value =>
      render(<Context.Provider value={value}>{children}</Context.Provider>)
    }
  </Context.Consumer>
);

export default ContextBridge;
