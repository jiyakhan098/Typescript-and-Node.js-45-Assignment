//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.

let magicians: string[] = ["Rehan","Dawood","Hammad","Khizar"];

function show_magician(magicians: string[]){

magicians.forEach(magician =>{
    console.log(magician);
});
}
show_magician(magicians);