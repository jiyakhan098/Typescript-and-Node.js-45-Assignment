//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements 
//that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit 
//is in your array, the if block should print a statement, such as You really like bananas.


let favorite_fruits :string[] =["Mango" , "Orange" ,"Apple"];
if ( favorite_fruits.includes("Mango")){
    console.log("I really like mango."); 
}
if ( favorite_fruits.includes("Orange")){
    console.log("I really like orange."); 
}
if ( favorite_fruits.includes("Banana")){
    console.log("I really like Banana."); 
}
if ( favorite_fruits.includes("Apple")){
    console.log("I really like apple."); 
}
if ( favorite_fruits.includes("Papaya")){
    console.log("I really like papaya."); 
}