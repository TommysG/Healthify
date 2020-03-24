import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "./App.css";
/*import Navbar from "./components/Navbar";*/

import welcome from "./pages/welcome";
import home from "./pages/home";
import login from "./pages/login";
import viewPost from "./pages/viewPost";
import createPost from "./pages/createPost";
import settings from "./pages/settings";

class App extends Component {
<<<<<<< HEAD
	render() {
		return (
			<div className="App">
				{/*<Navbar />*/}
				<Router>
					<Switch>
						<Route exact path="/" component={welcome} />
						<Route exact path="/home" component={home} />
						<Route exact path="/login" component={login} />
						<Route exact path="/about" component={welcome} />
						<Route exact path="/settings" component={settings} />
						<Route exact path="/contact" component={welcome} />
						<Route exact path="/viewpost" component={viewPost} />
						<Route exact path="/createPost" component={createPost} />
						<Route exact path="/404" component={Error404} />
						<Redirect to="/404" />
					</Switch>
				</Router>
			</div>
		);
	}
=======
  render() {
    return (
      <div className="App">
        {/*<Navbar />*/}
        <Router>
          <Switch>
            <Route exact path="/" component={welcome} />
            <Route path="/home" component={home} />
            <Route path="/login" component={login} />
            <Route exact path="/about" component={welcome} />
            <Route exact path="/contact" component={welcome} />
            <Route exact path="/viewpost" component={viewPost}>
              <Redirect to="/home"></Redirect>
            </Route>

            <Route path="/viewpost/:id" component={viewPost} />
            <Route exact path="/createPost" component={createPost} />
          </Switch>
        </Router>
      </div>
    );
  }
>>>>>>> aa8b5d872bd3a1b30a2206351aeac6e851274440
}

export default App;
