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
import Login from "./pages/login";
import register from "./pages/register";
import viewPost from "./pages/viewPost";
import createPost from "./pages/createPost";
import settings from "./pages/settings";
import news from "./pages/news";
import ScrollView from "./components/ScrollView";
import viewNews from "./pages/viewNews";
import { Base64 } from "js-base64";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Navbar />*/}
        <Router>
          <ScrollView>
            <Switch>
              <Route exact path="/" component={welcome} />
              <ProtectedRoute exact path="/home/news" component={news} />
              <ProtectedRoute exact path="/home" component={home} />
              <Route
                path="/login"
                render={() => (
                  <Login
                    isLogged={localStorage.getItem(Base64.encode("user"))}
                  ></Login>
                )}
              />
              <Route path="/signup" component={register} />
              <Route exact path="/about" component={welcome} />
              <Route exact path="/contact" component={welcome} />

              <ProtectedRoute exact path="/viewpost" component={viewPost}>
                <Redirect to="/home"></Redirect>
              </ProtectedRoute>
              <ProtectedRoute exact path="/home/viewpost" component={viewPost}>
                <Redirect to="/home"></Redirect>
              </ProtectedRoute>

              <ProtectedRoute
                exact
                path="/home/news/viewNews"
                component={viewNews}
              />

              <ProtectedRoute
                exact
                path="/home/settings"
                component={settings}
              />

              <ProtectedRoute path="/home/viewpost/:id" component={viewPost} />
              <ProtectedRoute
                path="/home/news/viewnews/:id"
                component={viewNews}
              />

              <ProtectedRoute
                exact
                path="/home/createpost"
                component={createPost}
              />
            </Switch>
          </ScrollView>
        </Router>
      </div>
    );
  }
}

export default App;
