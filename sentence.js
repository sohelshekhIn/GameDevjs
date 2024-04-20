// 10 arrays of randome words (10) words in each array)
var sentences = [
  "The quick brown fox jumps over the lazy dog",

  "The five boxing wizards jump quickly",
  "Pack my box with five dozen liquor jugs",
  "How quickly daft jumping zebras vex",
  "Quick zephyrs blow, vexing daft Jim",
  "Quick brown fox jumps over lazy dog",
  "The jay, pig, fox, zebra and my wolves quack",
  "Sympathizing would fix Quaker objectives",
  "The vixen jumped quickly on her foe barking",
  "Jinxed wizards pluck ivy from the big quilt",
];

// label
// randomly select a sentence from the sentences array
// split the sentence into an array of words
// loop through the array of words
// create a text object for each word
// set the text object to a random location on the stage
// add the text object to the stage
// add the text object to an array of text objects
// return the array of text objects

var random_sentence = sentences[Math.floor(Math.random() * sentences.length)];

function sentence() {
  new Label({
    text: random_sentence,
    size: 30,
    color: "white",
    backgroundColor: "black",
    padding: 10,
    corner: 10,
  }).loc(268, 640.2);
  return random_sentence
  return random_sentence;
}

export default sentence;