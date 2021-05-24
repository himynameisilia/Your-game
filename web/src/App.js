import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./views/login";
import Dashboard from "./views/dashboard";
import Register from "./views/register";
import { Provider } from "react-redux";
import store from "./redux/store";
import Game from "./views/game";
import Nav from "./views/nav";
import Home from "./views/Home";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="pt-20  bg-gradient-to-r from-blue-900 to-blue-700  h-screen">
          <nav className="fixed top-0 w-full">
            <Nav />
          </nav>

          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/play">
              <Game />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
