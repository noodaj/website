import React, { useEffect, useRef } from "react";
import Typed from 'typed.js'

function Intro() {
	const titles = ["programmer.", "student."]
    const title = useRef(null)

    useEffect(() => {
        new Typed(title.current, {
            strings: titles,
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 2000,
            smartBackspace: true,
            showCursor: false,
            loop: true
        })
    })

	return (
		<>
			<div className="title">
               <h1>Hi 👋, I'm Jadon, a <span ref = {title}></span></h1>
               <p>Hello, I'm Jadon, currently a student at UNLV majoring in Computer Science!</p>
               <p>I enjoy solving problems and creating software that users can find useful, innovative and intersting.</p>
            </div>
		</>
	);
}

export default Intro;
