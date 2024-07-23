//Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great()
// that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call
// show_magicians() to see that the list has actually been modified.
var magicians = ["Rehan", "Dawood", "Hammad", "Khizar"];
function show_magician(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
;
function make_great(magicians) {
    return magicians.map(function (magicians) { return "The great ".concat(magicians); });
}
;
var great_magicians = make_great(magicians);
show_magician(great_magicians);
