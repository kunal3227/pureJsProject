//Dates

let myDate = new Date()

// console.log(myDate)
// console.log(myDate.toString());

// console.log(myDate.toDateString()); //Tue Jul 15 2025
// console.log(myDate.toLocaleString()); //15/7/2025, 10:04:08 am

//let newDate = new Date(2023, 0, 23)
//let newDate = new Date(2023, 0, 23, 5, 3)
let newDate = new Date("2023-01-14")
//console.log(newDate.toLocaleString());

//let myTimeStamp = Date.now()
//console.log(myTimeStamp);

//console.log(Math.floor(Date.now()/1000));

let mewDate = new Date()
console.log(mewDate.toLocaleString());

let vdate = mewDate.toLocaleString('default',{
    weekday: "long",
    dayPeriod: "long",
})

console.log(vdate);

