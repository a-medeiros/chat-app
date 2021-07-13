import React from "react";
import Home from "./pages/Home/Home";
import Chat from "./pages/Chat/Chat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/chat" component={Chat}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
