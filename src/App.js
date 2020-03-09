import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import welcome from "./pages/welcome";
import home from "./pages/home";
import login from "./pages/login";
import viewPost from "./pages/viewPost";
import { error as Error404 } from "./pages/error";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<Router>
					<Switch>
						<Route exact path="/" component={welcome} />
						<Route exact path="/home" component={home} />
						<Route exact path="/login" component={login} />
						<Route exact path="/about" component={welcome} />
						<Route exact path="/contact" component={welcome} />
						<Route exact path="/viewPost" component={viewPost} />
						<Route exact path="/404" component={Error404} />
						<Redirect to="/404" />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
