//Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of 
//the array of magicians’ names. Because the original array will be unchanged, return the new array and store
// it in a separate array. Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.

let magicians: string[] = ["Rehan","Dawood","Hammad","Khizar"];

function show_magician(magicians: string[]){

magicians.forEach(magician =>{
    console.log(magician);
});
};

function make_great(magicians:string[]){
    return magicians.map(magicians => `The great ${magicians}`)
};


let copy_magician_names :string[] = magicians.slice();
let copy_great_magicians = make_great(copy_magician_names)
console.log("Original array");
show_magician(magicians);
console.log("Coppied array");
show_magician(copy_great_magicians);



