//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should
// have one parameter that collects as many items as the function call provides, and it should print a 
//summary of the sandwich that is being ordered. Call the function three times, using a different number of
// arguments each time.

function makeSandwitch (...items :string[]){
    console.log("Making a Sandwitch with the following items: ");
    items.forEach(singleItem =>
    console.log(singleItem)
    )
    console.log("Now enjoy the Sandwitch!");
};
makeSandwitch("Bread","Butter");
makeSandwitch("Cheese","Chicken","Egg");
makeSandwitch("Bread","Butter","Tomato","Cheese","Chicken","Egg");