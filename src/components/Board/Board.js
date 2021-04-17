import React from 'react';
import "./Board.css";
import {connect} from "react-redux";
import {setCurrent, setStart, setScore} from "../../redux/reducer";

function Board(props) {
    
    const handleClick = (e) => {
        props.setCurrent(e.target.id);
        if (e.target.id === props.final) {
            alert("Success");
            props.setStart(`${Math.floor(Math.random()*3 + 1)}${Math.floor(Math.random()*3 + 1)}`);
            props.setScore(props.score + 1);
        } else {
            alert("Fail");
            props.setStart(`${Math.floor(Math.random()*3 + 1)}${Math.floor(Math.random()*3 + 1)}`);
        }
    }
    
    return (
        <div>
            
            Board
            <div>
                Green Elem - start point
            </div>
            <div className="board__section">
                <div id="11" onClick={handleClick} className={`board__element ${props.start === "11" ? "active" : ""}`}>
                    Elem
                </div>
                <div id="12" onClick={handleClick} className={`board__element ${props.start === "12" ? "active" : ""}`}>
                    Elem
                </div>
                <div id="13" onClick={handleClick} className={`board__element ${props.start === "13" ? "active" : ""}`}>
                    Elem
                </div>
            </div>
            <div className="board__section">
                <div id="21" onClick={handleClick} className={`board__element ${props.start === "21" ? "active" : ""}`}>
                    Elem
                </div>
                <div id="22" onClick={handleClick} className={`board__element ${props.start === "22" ? "active" : ""}`}>
                    Elem
                </div>
                <div id="23" onClick={handleClick} className={`board__element ${props.start === "23" ? "active" : ""}`}>
                    Elem
                </div>
            </div>
            <div className="board__section">
                <div id="31" onClick={handleClick} className={`board__element ${props.start === "31" ? "active" : ""}`}>
                    Elem
                </div>
                <div id="32" onClick={handleClick} className={`board__element ${props.start === "32" ? "active" : ""}`}>
                    Elem
                </div>
                <div id="33" onClick={handleClick} className={`board__element ${props.start === "33" ? "active" : ""}`}>
                    Elem
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        start: state.data.startCoordinate,
        final: state.data.finalCoordinate,
        score: state.data.score
    }
}


export default connect(mapStateToProps, {setCurrent, setStart, setScore})(Board);
