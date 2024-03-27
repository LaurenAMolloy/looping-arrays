//Output Strings with a for…of Loop
var programmingLanguages = [
  "Scala",
  "Java",
  "Go",
  "Swift",
  "Cobol",
  "JavaScript",
  "Python",
  "Ruby",
  "Elm",
  "Rust",
  "C#"
];
// Log out the array
console.log(programmingLanguages);

//Use a for...of loop to loop through each element in the array. 
for (var language of programmingLanguages){
  console.log(`I want to learn ${language}`);
}

//Create a Numbered List with forEach()
programmingLanguages.forEach(function (language, index) {
  console.log(`The ${language} element is at position ${index + 1}.`);
});

//change the array elements to uppercase letters automatically.
programmingLanguages.forEach(function (item, index) {
  console.log(`${index + 1}. ${item.toUpperCase()}`);
});

//Filter Elements by a String

var updatedLanguages = programmingLanguages.filter(function (item) {
  return item.includes("y");
});
console.log(updatedLanguages);
