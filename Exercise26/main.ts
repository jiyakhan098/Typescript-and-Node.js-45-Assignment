//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//• Write one version of this program that runs the if block and another that runs the else block.

//first version that run if block
let alian_color :string = "green";
if (alian_color === "green"){
    console.log("Player just earned 5 points for shooting the alian!")
}else {
    console.log("You earned 10 points. ");
    
}
//second version that run else block
 alian_color  = "red";
 if (alian_color === "green"){
    console.log("Player just earned 5 points for shooting the alian!")
}else {
    console.log("You earned 10 points. ");
    
}


