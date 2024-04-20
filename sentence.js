<<<<<<< HEAD
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
}

export default sentence;
=======
import zim from "https://zimjs.org/cdn/016/zim_game";

// Define the Label class

const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "A journey of a thousand miles begins with a single step.",
  "To be or not to be, that is the question.",
  "All's fair in love and war.",
  "Practice makes perfect."
];

const submitButton = new Button({label:"SUBMIT"}).pos(100, 200,LEFT,TOP);
    submitButton.tap(()=>{
        zog(input.text); // whatever is typed into the LabelInput
    });

    const randomIndex = Math.floor(Math.random() * sentences.length);
    const randomSentence = sentences[randomIndex];


    const sentence = new Label(randomSentence).pos(0,50,CENTER)

    // Auto-submit method
    const autoSubmit = () => {
        zog(input.text); // whatever is typed into the LabelInput
    };

    // Automatically submit when user types and presses Enter key
    input.on("keydown", (event) => {
        if (event.keyCode === 13) { // Check if Enter key is pressed
            autoSubmit();
        }
    });

    // Remove the submit button
    submitButton.removeFrom(stage);
>>>>>>> 96dc54e8944ea9e50891e861bbb5e46c0cd728d3
