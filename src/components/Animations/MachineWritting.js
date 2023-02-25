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
                .typeString(props.onChange[0])
                .pauseFor(500)
                .deleteAll()
                .typeString(props.onChange[1])
                .pauseFor(100)
                .deleteAll()
                .typeString(props.onChange[2])
                .pauseFor(5000)
                .deleteAll()
                .typeString(props.onChange[3])
                .pauseFor(500)
                .deleteAll()
                .typeString(props.onChange[4])
                .pauseFor(100)
                .deleteAll()
                .typeString(props.onChange[5])
                .pauseFor(5000)
                .start();
            }}/>
        </h1>
    );
};

export default MachineWritting;