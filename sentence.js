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
