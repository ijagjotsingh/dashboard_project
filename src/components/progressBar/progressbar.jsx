import React from "react";
import "./progressBar.css"
import { CircularProgressbar ,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Progressbar(props){
    return (
        <div className="progressBar">
            <div className="progressImage">
                <CircularProgressbar value ={props.value} text={props.text} 
                    styles={
                        buildStyles({
                        pathColor: props.pathColor,
                        textColor: props.pathColor,})
                        }/>
            </div>
            <div className="progressText">
                <p>{props.proText}</p>
            </div>
        </div>
    )
}

export default Progressbar;