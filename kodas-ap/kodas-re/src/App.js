import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Footer from "./components/Footer";
import CreateGreeting from "./pages/CreateGreeting";
import UpdateGreeting from "./pages/UpdateGreeting";

const App = () => {
  document.title = "AppleShop";
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin" component={Admin} />
          <Route path="/details/greeting/:id" component={Details} />
          <Route path="/admin/add-greeting" component={CreateGreeting} />
          <Route path="/admin/update-greeting/:id" component={UpdateGreeting} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
};

export default App;
