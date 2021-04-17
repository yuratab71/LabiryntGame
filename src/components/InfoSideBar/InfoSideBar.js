import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {setFinal} from "../../redux/reducer";
import {calculateEndCoordinate} from "../../services/service";
import ArrowBackIcon from '@material-ui/icons/ArrowBack'; // left
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'; // down
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'; // right
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'; // up

function InfoSideBar(props) {
    
    useEffect(() => {
        let obj = calculateEndCoordinate(props.startCoordinate);
        console.log(obj);
        props.setFinal(obj.coord, obj.arr);
    }, [props.startCoordinate]);
    
    
    const ArrowSwitch = (name) => {
        switch(name){
            case "up arrow":
                return <ArrowUpwardIcon fontSize="large"/>;
            case "down arrow":
                return <ArrowDownwardIcon fontSize="large"/>;
            case "left arrow":
                return <ArrowBackIcon fontSize="large"/>;
            case "right arrow":
                return <ArrowForwardIcon fontSize="large"/>;
        }
    }

    return (
        <div>
            <div className="arrow__box">
                {props.path.map((el) => {
                    return <div className="arrow">{ArrowSwitch(el)}</div>;
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentCoordinate: state.data.currentCoordinate,
        startCoordinate: state.data.startCoordinate,
        final: state.data.finalCoordinate,
        path: state.data.path
    }
}

export default connect(mapStateToProps, {setFinal})(InfoSideBar);
