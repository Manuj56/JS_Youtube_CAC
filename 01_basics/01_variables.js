const accountId = 12345;
let accountemail = "hitesh@google.com";
var accountpassword = "abcd1234";
let accountCity = "Delhi";
let accountstate; // undefined

// accountId = 23456; This will throw an error because accountId is a constant. NOT ALLOWED

console.log(accountId);
accountemail = "hekbrkb@gmail.com";
accountpassword = "newpassword1234";
accountCity = "Mumbai";

/* Prefer not to use var
because of issues in block scope and functional scope */

console.table({accountId, accountemail, accountpassword, accountCity, accountstate});