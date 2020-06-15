import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
/*import Navbar from "./components/Navbar";*/

import ProtectedRoute from "./components/ProtectedRoute.js";
import welcome from "./pages/welcome";
import home from "./pages/home";
import login from "./pages/login";
import register from "./pages/register";
import viewPost from "./pages/viewPost";
import createPost from "./pages/createPost";
import settings from "./pages/settings";
import news from "./pages/news";
import ScrollView from "./components/ScrollView";
import viewNews from "./pages/viewNews";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Navbar />*/}
        <Router>
          <ScrollView>
            <Switch>
              <Route exact path="/" component={welcome} />
              <Route exact path="/news" component={news} />
              <ProtectedRoute exact path="/home" component={home} />
              <Route path="/login" component={login} />
              <Route path="/signup" component={register} />
              <Route exact path="/about" component={welcome} />
              <Route exact path="/contact" component={welcome} />

              <Route exact path="/viewpost" component={viewPost}>
                <Redirect to="/home"></Redirect>
              </Route>
              <Route exact path="/home/viewpost" component={viewPost}>
                <Redirect to="/home"></Redirect>
              </Route>

              <Route exact path="/news/viewNews" component={viewNews} />

              <Route exact path="/home/settings" component={settings} />

              <Route path="/home/viewpost/:id" component={viewPost} />
              <Route path="/news/viewnews/:id" component={viewNews} />

              <Route exact path="/home/createpost" component={createPost} />
            </Switch>
          </ScrollView>
        </Router>
      </div>
    );
  }
}

export default App;
