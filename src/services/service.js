const calculateEndCoordinate = (start) => {
    let current = start;
    let arrResult = [];
    for (let i = 0; i < 10; i++) {
        let a = calculateDirection(current);
        arrResult.push(a);
        current = calculateCoordinate(a , current);
        console.log(a, current);
    }   
     
    return {
        arr: arrResult,  // array of arrows 
        coord: current // end coordinate
    }
}

const calculateDirection = (string) => {
    switch(string) {
        case "11":
            {
            let arr = ["right arrow", "down arrow"]
            return arr[Math.floor(Math.random() * 2)];
            }
        case "12":
            {
                let arr = ["right arrow", "down arrow", "left arrow"];
                return arr[Math.floor(Math.random() * 3)];
            }
        case "13":
            {
                let arr = ["left arrow", "down arrow"];
                return arr[Math.floor(Math.random() * 2)];
            }
        case "21":
            {
                let arr = ["up arrow", "right arrow", "down arrow"];
                return arr[Math.floor(Math.random() * 3)];
            }
        case "22":
            {
                let arr = ["up arrow", "right arrow", "down arrow", "left arrow"];
                return arr[Math.floor(Math.random() * 4)];
            }
        case "23":
            {
                let arr = ["up arrow", "down arrow", "left arrow"];
                return arr[Math.floor(Math.random() * 3)];
            }
        case "31":
            {
                let arr = ["up arrow", "right arrow"];
                return arr[Math.floor(Math.random() * 2)];
            }
        case "32":
            {
                let arr = ["up arrow", "right arrow", "left arrow"];
                return arr[Math.floor(Math.random() * 3)];
            }
        case "33":
            {
                let arr = ["up arrow", "left arrow"];
                return arr[Math.floor(Math.random() * 2)];
            }
            
    }
}

const calculateCoordinate = (direction, coordinate) => {
    switch(direction){
        case "up arrow":
            {
                return `${+coordinate.split("")[0] - 1}${+coordinate.split("")[1]}`;
            }
        case "right arrow":
            {
                return `${+coordinate.split("")[0]}${+coordinate.split("")[1] + 1}`;
            }
        case "down arrow":
            {
                return `${+coordinate.split("")[0] + 1}${+coordinate.split("")[1]}`;
            }
        case "left arrow":
            {
                return `${+coordinate.split("")[0]}${+coordinate.split("")[1] - 1}`;
            }
    }
}

export {calculateEndCoordinate};