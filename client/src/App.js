import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import Chat from "./pages/Chat/Chat";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/chat" component={Chat} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
