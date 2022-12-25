import React from "react";
import Typed from "react-typed";

function Intro() {
	return (
		<>
			<div className="title">
				<h1>
					Hi 👋, I'm Jadon, a{" "}
					<Typed
						strings={["programmer.", "student."]}
						typeSpeed={40}
						backSpeed={50}
						loop={true}
					></Typed>
				</h1>
				<p>
					Hello, I'm Jadon, currently a student at UNLV majoring in
					Computer Science!
				</p>
				<p>
					I enjoy solving problems and creating software that users
					can find useful, innovative and interesting.
				</p>
			</div>
		</>
	);
}

export default Intro;
