import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {setTimerOut, setScore} from "../../redux/reducer";

function Timer(props) {
    const [counter, setCounter] = useState(60);
    
    useEffect(() => {
        counter > 0 ? setTimeout(() => setCounter(counter - 1), 1000) : props.setTimerOut(true);

      }, [counter]);

    return (
        <div className="timer">
            Time: {counter}
        </div>
    )
}

const mapDispatchToProps = (state) => {
    return {

    }
}

export default connect(mapDispatchToProps, {setTimerOut})(Timer);
