import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TemplateLoader from "./components/TemplateLoader";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getLayout } from "./store/getters/layouts";

interface Props {}

const App: React.FC<Props> = (props) => {
  const params: { id?: string } = useParams();
  const layout = useSelector(getLayout(parseInt(params.id || "1")));
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <TemplateLoader layout={layout} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
