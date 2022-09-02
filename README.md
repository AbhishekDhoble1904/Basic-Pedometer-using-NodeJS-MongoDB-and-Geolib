# Basic-Pedometer-using-NodeJS-MongoDB-and-Geolib

Download and install all the dependencies using npm i 
Use npm start
Now open POSTMAN and use "http://localhost:8000/fit/create" to add new data in database where in input field should be 



#Input
{
    "userName":"Raj Ray",
    "userAge": 25,
    "userStartLatitude": 18.9911106,
    "userStartLongitude": 73.7334396,
    "userStopLatitude": 19.1613484,
    "userStopLongitude": 78.9324209
}

![image](https://user-images.githubusercontent.com/72486595/188120781-7b864273-d2d6-4e15-b5c7-bcd0313c5773.png)


#output
{
    "userName": "Raj Ray",
    "userAge": 25,
    "userStartLatitude": 18.9911106,
    "userStartLongitude": 73.7334396,
    "userStopLatitude": 19.1613484,
    "userStopLongitude": 78.9324209,
    "Start_Date_Time": "2/9/2022 15:59:54",
    "kilometerData": 547.274,
    "average_Setps": 770562,
    "average_Calories": 33931,
    "Required_Time_Hour": 109,
    "Rewards": 771,
    "_id": "6311db22a062872bf9306eaf",
    "__v": 0
}

Thank you!
