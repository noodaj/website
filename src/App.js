import React from "react";
import Intro from "./components/intro";
import Timeline from "./components/timeline";
import {HiMenu} from "react-icons/hi"

import "./App.css";

function App() {
	return (
		<div className="App">
			<HiMenu></HiMenu>
			<Intro/>
			<Timeline/>
		</div>
	);
}

export default App;
