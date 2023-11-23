// console.log("Hi!")

//  Building an Object
    // First, create an object called words with the keys given below. Each key's property should be an empty string.
const words = {
    number: " ",
    adjective: " ",
    pluralNoun: " ",
    adverb: " ",
    anotherAdjective: " ",
};

// Interact With the User
    // Start by creating a function called startMadlib that prompts a user to enter each word type and save their input to the appropriate object key.
    // To make sure you accepted all the user's input and saved it correctly, console.log your object after all the prompts are complete.

function startMadlib() {
words.number = prompt("Enter a number:");
words.adjective = prompt("Enter an adjective:");
words.pluralNoun = prompt("Enter a plural noun:");
words.adverb = prompt("Enter an adverb:");
words.anotherAdjective = prompt("Enter another adjective:");

console.log(words);

// Create the Tech Startup MadLib Story!
    // Use the following story and concatenate or interpolate the values from the object into it.
    // Finally, once the user finishes submitting all prompts, they should be alerted of the story they've created! 
const story = `Once upon a time a group of ${words.number} General Assembly graduates
got together and made a startup called ${words.adjective} Technologies.
Their goal was to create smart ${words.pluralNoun}.
They approached the challenge ${words.adverb}
which ultimately lead them to ${words.anotherAdjective} fame.`;

alert(story);
}

startMadlib();