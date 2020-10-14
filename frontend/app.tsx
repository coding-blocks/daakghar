import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TemplateLoader from "./components/TemplateLoader";
import Navbar from "./components/Navbar";

interface Props {}

const App: React.FC<Props> = (props) => {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/template">
            <TemplateLoader />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
