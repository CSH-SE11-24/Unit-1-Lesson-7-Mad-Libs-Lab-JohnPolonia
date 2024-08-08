// Console log a welcome message with instructions to mad libs



// Prompt the user to enter parts of speech for mad libs
// You should be asking for at least 4 words
let adjective = prompt("Give me an adjective")
let plural = prompt("Give me an plural noun")
let verbpresent = prompt("Give me an verb (present tense)")
let adjectivesec =prompt("Give me another adjective")

// Create an array that stores the values the user entered
let storeArray = []
// Push the user inputs to the array
storeArray.push(adjective, plural, verbpresent, adjectivesec)
console.log(storeArray)
// Console log the story with the array values passed into the blanks
console.log(`In a small ${storeArray[0]} school in the Bronx, there was a problem with too many ${storeArray[1]}. These ${storeArray[1]} loved to ${storeArray[2]}, which caused Mr. P so many headaches. However, no one wanted to remove them because they were too ${storeArray[3]} so they stayed there forever`)

// Make sure you are referencing the values of the array (rather than the user inputs themselves)
// You can use any type of string manipulation that feels more intuitive








