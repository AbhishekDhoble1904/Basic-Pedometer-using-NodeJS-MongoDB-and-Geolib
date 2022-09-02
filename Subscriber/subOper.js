const { getDistance, convertDistance } = require('geolib');
const control = require('../controller/fit');


//Function for Kilometer
const getDist = async (userStartLatitude, userStartLongitude, userStopLatitude, userStopLongitude) => {

    const my_Coor = { latitude: userStartLatitude, longitude: userStartLongitude };
    const pairs_Coor = { latitude: userStopLatitude, longitude: userStopLongitude };

    let distance = getDistance(my_Coor, pairs_Coor, 1);
    const kilometer = convertDistance(distance, 'km');
    return { error: false, data: kilometer }

}

//Function for Average Steps
const avgSteps = async (kilometerData) => {
    // console.log("KilometerData : ", kilometerData);
    const mySteps = kilometerData * 1408;
    const my_Steps = Math.round(mySteps);
    // console.log("my_Steps : ", my_Steps);
    return { error: false, data: my_Steps };
}

//Function for Calories burn
const avgCal = async (kilometerData) => {
    const myCal = kilometerData * 62;
    const my_Cal = Math.round(myCal);
    return { error: false, data: my_Cal };
}

//Function for Rewards
const reward = async (average_Setps) => {
    const myreward = (average_Setps / 1000);
    const my_reward = Math.round(myreward);
    return { error: false, data: my_reward };
}


//Date And time
const dateAndTime = async () => {
    var today = new Date();
    // var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    return { error: false, data: dateTime };
}


//Required time
const reqTime = async (kilometerData) => {
    const myTime = (kilometerData * 12) / 60;
    const my_Time = Math.round(myTime);
    return { error: false, data: my_Time };
}

module.exports = {
    getDist,
    avgSteps,
    avgCal,
    reward,
    dateAndTime,
    reqTime
}
