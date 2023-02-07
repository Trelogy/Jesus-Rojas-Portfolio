import React from "react";
import Typewriter from "typewriter-effect";

import classes from './MachineWriting.module.css';

const MachineWritting = (props) => {
    return (
        <h1 className={`${classes.title} ${props.className}`}>
            <Typewriter
            options={{
                autoStart: true,
                loop:true,
            }}
            onInit={(typewriter)=> {
                typewriter
                .typeString("Hello")
                .pauseFor(500)
                .deleteAll()
                .typeString("I'm")
                .pauseFor(100)
                .deleteAll()
                .typeString("Jesus Rojas Web Developer")
                .pauseFor(5000)
                .start();
            }}>{props.children}</Typewriter>
        </h1>
    );
};

export default MachineWritting;