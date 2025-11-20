// Dates

let mydate = new Date();
console.log(mydate); // current date and time
console.log(mydate.toString());    // current date and time in string format
console.log(mydate.toDateString()); // current date in string format   
console.log(mydate.toISOString());  // current date in ISO format
console.log(mydate.toJSON());   // current date in JSON format
console.log(mydate.toLocaleDateString());   // current date in locale date string format
console.log(mydate.toLocaleString());   // current date and time in locale string format

console.log(typeof mydate); // "object"

let myCreatedDate = new Date(2023, 0, 23, 5, 3); // year, month (0-indexed), day, hours, minutes, seconds, milliseconds
console.log(myCreatedDate.toDateString()); // "Mon Jan 23 2023"
console.log(myCreatedDate.toLocaleString());  // "1/23/2023, 5:03:00 AM" (format may vary based on locale)

let mynewdate = new Date("01-14-2023");
console.log(mynewdate.toLocaleString());

let mytimestamp = Date.now();
console.log(mytimestamp);   // milliseconds since epoch
console.log(myCreatedDate.getTime());   // milliseconds since epoch for the created date
console.log(new Date(mytimestamp).toLocaleString()); // converting timestamp back to date
console.log(Date.now()/1000); // seconds since epoch
console.log(Math.floor(Date.now()/1000)); // seconds since epoch without decimals

let newdate = new Date();
console.log(newdate);
console.log(newdate.getMonth() + 1); // month is 0-indexed
console.log(newdate.getDay()); // day of the week (0-6) Sunday - Saturday
console.log(newdate.getDate()); // day of the month (1-31)
console.log(newdate.getFullYear()); // year
console.log(newdate.getHours()); // hours
console.log(newdate.getMinutes()); // minutes
console.log(newdate.getSeconds()); // seconds
console.log(newdate.getMilliseconds()); // milliseconds












