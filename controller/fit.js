const Fit = require('../models/fit')
const mongoose = require('mongoose');
const fit = require('../models/fit');
const suboper = require('../Subscriber/subOper')

//CREATE
const create = async (req, res, next) => {
    const userName = req.body.userName;
    const userAge = req.body.userAge;
    const userStartLatitude = req.body.userStartLatitude;
    const userStartLongitude = req.body.userStartLongitude;
    const userStopLatitude = req.body.userStopLatitude;
    const userStopLongitude = req.body.userStopLongitude;
    //kilometer 
    const kilometer = await suboper.getDist(userStartLatitude, userStartLongitude, userStopLatitude, userStopLongitude)
    const kilometerData = kilometer.data;

    //Average steps 
    const my_Steps = await suboper.avgSteps(kilometerData)
    const average_Setps = my_Steps.data;

    //Average Calories
    const my_Cal = await suboper.avgCal(kilometerData)
    const average_Calories = my_Cal.data;

    //Rewards
    const my_reward = await suboper.reward(average_Setps)
    const Rewards = my_reward.data;

    const my_DateTime = await suboper.dateAndTime()
    const Start_Date_Time = my_DateTime.data;

    const my_Time = await suboper.reqTime(kilometerData)
    const Required_Time_Hour = my_Time.data;

    let saveFit = new fit({
        userName,
        userAge,
        userStartLatitude,
        userStartLongitude,
        userStopLatitude,
        userStopLongitude,
        Start_Date_Time,
        kilometerData,
        average_Setps,
        average_Calories,
        Required_Time_Hour,
        Rewards
    })

    saveFit.save().then((data) => {
        res.send(data);
    })

}

//VIEW
function view(req, res, next) {
    fit.find({}).then((data) => {
        res.send(data);
    })
}

//UPDATE
function update(req, res, next) {
    fit.findByIdAndUpdate(req.params.id, req.body, (err, emp) => {
        if (err) {
            return res.status(500).send({ error: "Problem with Updating the recored " });
        };
        res.send({ success: "Updation successfull" });
    })
}

//REMOVE
function remove(req, res, next) {
    fit.findByIdAndDelete(req.params.id, (err, emp) => {
        if (err) {
            return res.status(500).send({ error: "Problem with Deleting the Employee recored" });
        }
        res.send({ success: 'Employee deleted successfully' });
    })
}


module.exports = {
    create,
    view,
    update,
    remove
};
