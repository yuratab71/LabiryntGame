import React,  {useEffect} from 'react';
import "./Main.css";
import Board from "../Board/Board";
import InfoSideBar from "../InfoSideBar/InfoSideBar";
import {connect} from "react-redux";
import Timer from "../Timer/Timer";
import {setTimerOut, setScore} from "../../redux/reducer";

function Main(props) {
    
    useEffect(() => {
        props.setTimerOut(false);
        props.setScore(0);
    },[props.start])

    const restart = () => {
        props.setTimerOut(false);
        props.setScore(0);
    }

    return (
        <div>
            {
                props.timerOut ? <div className="main"><h1>Your score: {props.score}<button onClick={restart}>Restart</button></h1></div> : <div className="main">
                <div>
                    <Timer/>
                    {`Score: ${props.score}`}
                </div>
                        <Board/>
                        <InfoSideBar/>
                </div>
            }
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        score: state.data.score,
        timerOut: state.data.timerOut
    }
}

export default connect(mapStateToProps, {setTimerOut, setScore})(Main);
