let greeting = "It was a dark and stormy night.";

let jadeArray = ["green", "dark green", "black jade", "almost white jade"];

let orderNum = [1,2,3,4,5,6,7,8,9];




let splitGreeting = greeting.split("");


greeting = splitGreeting.join("");



function randomArray(array) {
    let randIndex = Math.floor(Math.random() * Math.floor(array.length));
    let randItem = array[randIndex];
    return [randIndex, randItem];
}



function randomItemSwap(arrayOne){
    let choiceOne = randomArray(arrayOne);
    let choiceTwo = randomArray(arrayOne);


    arrayOne.splice(choiceTwo[0], 1, choiceOne[1]);
    // console.log(choiceOne);
    // console.log(choiceTwo);

    arrayOne.splice(choiceOne[0], 1, choiceTwo[1]);

    console.log(arrayOne);
    return arrayOne;

}

//randomItemSwap(splitGreeting);
console.log(orderNum);
randomItemSwap(orderNum);

let candy = new Map();

candy.set("purple", "grape");
candy.set("orange", "orange");
candy.set("blue", "blueberry");
candy.set("green", "green apple");
candy.set("pink", "grapefruit");

for (let c of candy){
    console.log("The " + c[1] + " flavor candy is colored " + c[0]);
}

candy.get("orange");
console.log(candy.get("beige"));

function getColorInCandy(color, map) {
    if (map.has(color)) {
        console.log(map.get(color));
    } else {
        console.log("That color is not in the candy map!");
    }

    return map;
}

// getColorInCandy("blue", candy);
// getColorInCandy("periwinkle", candy);


function getColorInCandy(colorArray, map) {
    let flavorArray = [];
    for (let color of colorArray){

        if (map.has(color)){
          flavorArray.push(map.get(color));
        }
        else{
            flavorArray.push("NULL");
        }
    }

    console.log(flavorArray);
    return map;
}
// Create a function that reverses a word

getColorInCandy(["blue", "red", "purple"], candy);

// Create a function that takes an array of words and returns a new array of the
 // words with each word reversed.

// Create a function that returns a random word from an array

// Create an array of words and save it to a variable. Using your functions create
// a second array of reversed words.

// We could use the two arrays we've created to select a random word to show the user
// and check their guess. How could we do that? Is there a better way?


// ////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of words and returns a map with the keys
// as the reversed word and the values as the original word.



// Create a function that takes two strings, `guess` and `word` and a map, like
// the one you created above. If the first string is in the map, return the word
// if not, console log "Sorry, incorrect. The word was ..." and include word.


// ////////////////////////////////////////////////////////////////////////////
// FURTHER STUDY

// Create a function that scrambles a word. Use whatever method you like to
// rearrange the letters.



// Create a function that takes an array of words and returns a map with the
// scrambled words as the keys and the original word as the values.
