const SET_CURRENT_COORDINATE = "SET_CURRENT_COORDINATE";
const SET_FINAL_COORDINATE = "SET_FINAL_COORDINATE";
const SET_START = "SET_START";
const SET_SCORE = "SET_SCORE";
const SET_TIMER_OUT = "SET_TIMER_OUT";

let initialState = {
    currentCoordinate: null,
    finalCoordinate: null,
    startCoordinate: `${Math.floor(Math.random()*3 + 1)}${Math.floor(Math.random()*3 + 1)}`,
    path: [],
    score: 0,
    timerOut: false
}

const reducer = (state = initialState, action) => {
    console.log(action.type, ">>>>>>>>> Reducer");
    switch(action.type){
        case SET_CURRENT_COORDINATE:
            return {
                ...state,
                currentCoordinate: action.coordinate
            }
        case SET_FINAL_COORDINATE:
            return {
                ...state,
                finalCoordinate: action.coordinate,
                path: [...action.array]
            }   
        case SET_START:
            return {
                ...state,
                startCoordinate: action.coordinate
            } 
        case SET_SCORE:
            return {
                ...state,
                score: action.score
            }
        case SET_TIMER_OUT:
            return {
                ...state,
                timerOut: action.bool
            }
        default: 
            return state;
        
    }
}

export default reducer;

export const currentCoordinateAC = (coordinate) => {
    return {
        type: SET_CURRENT_COORDINATE,
        coordinate
    }
}   

export const finalCoordinateAC = (coordinate, array) => {
    return {
        type: SET_FINAL_COORDINATE,
        coordinate,
        array
    }
}

export const setStartAC = (coordinate) => {
    return {
        type: SET_START,
        coordinate
    }
}

export const setScoreAC = (score) => {
    return {
        type: SET_SCORE,
        score
    }
}

export const setTimerOutAC = (bool) => {
    return {
        type: SET_TIMER_OUT,
        bool
    }
}

export const setTimerOut = (bool) => {
    return (dispatch) => {
        dispatch(setTimerOutAC(bool));
    }
}

export const setCurrent = (coordinate) => {
    return (dispatch) => {
        dispatch(currentCoordinateAC(coordinate));
    }
}

export const setFinal = (coordinate, array) => {
    return (dispatch) => {
        dispatch(finalCoordinateAC(coordinate, array))
    }
}



export const setStart = (coordinate) => {
    return (dispatch) => {
        dispatch(setStartAC(coordinate));
    }
}

export const setScore = (score) => {
    return (dispatch) => {
        dispatch(setScoreAC(score));
    }
}