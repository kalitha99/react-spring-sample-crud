import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Appbar from "./components/Appbar";
import ShowStudent from "./components/ShowStudent";
import Student from "./components/Student";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Appbar />
            <Student />
          </Route>

          <Route exact path="/info">
            <Appbar />
            <ShowStudent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
