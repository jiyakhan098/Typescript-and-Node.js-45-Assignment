//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to
// try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
// and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
console.log("Testing equality with string");
// equality with string
console.log("apple" == "apple");
// inequality with string
console.log("apple" != "apple");
//using the lower case function
console.log("Testing with lower case");
console.log("APPLE".toLowerCase() == "apple");
console.log("APPLE".toLowerCase() != "apple");
//Numerical test
console.log("Numerical test");
//equal to 
console.log("23 is equal to 23");
console.log(23 == 23);
//not equal to
console.log("23 is not equal to 23");
console.log(23 != 23);
//greater than
console.log("23 greater than 15 ");
console.log(23 > 15);
//less than
console.log("23 is less than 15");
console.log(23 < 15);
//greater than or equal to
console.log("50 is greater than or equal to 40");
console.log(50 >= 40);
//less than and equal to 
console.log("50 is less than or equal to 40");
console.log(50 <= 40);
// Tests using "and" and "or" operators
console.log("Test with 'and' and 'or' operator");
//using && (and)
console.log("Ten is equal to ten and ten greater than twenty");
console.log(10 == 10 && 10 > 20);
console.log("Ten is equal to ten and ten is less than twenty");
console.log(10 == 10 && 10 < 20);
//using || (or)
console.log("Ten is equal to ten or ten greater than twenty");
console.log(10 == 10 || 10 > 20);
console.log("Ten is not equal to ten or ten is greater than twenty");
console.log(10 != 10 || 10 > 20);
// Test whether an item is in a array
let cities = ["Karachi", "Lahore", "Islamabad"];
console.log("Is Karachi is in my cities array?");
console.log(cities.includes("Karachi"));
// Test whether an item is not in a array
console.log("Is Peshawar is in my cities array?");
console.log(cities.includes("Peshawar"));
