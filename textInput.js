import zim from "https://zimjs.org/cdn/016/zim_game";

function getCharWidthScore(char) {
  // Character width reference dictionary
  const charWidths = {
    f: 2,
    l: 0,
    t: 0,
    w: 2,
    W: 2,
    C: 1,
    G: 1,
    S: 1,
    b: 1,
    h: 1,
    k: 1,
    p: 1,
    u: 1,
    A: 1,
    E: 1,
    H: 1,
    I: 0,
    M: 2,
    N: 1,
    O: 1,
    Q: 1,
    R: 1,
    V: 1,
    X: 1,
    Y: 1,
    d: 1,
    i: 0,
    j: 0,
    m: 1,
    n: 1,
    o: 1,
    r: 1,
    v: 1,
    B: 1,
    D: 1,
    F: 2,
    J: 0,
    K: 1,
    L: 1,
    P: 1,
    T: 1,
    U: 1,
    Z: 1,
    a: 1,
    e: 1,
    g: 1,
    h: 1,
    k: 1,
    p: 1,
    u: 1,
    y: 1,
    c: 0,
    s: 0,
    x: 1,
  };

  // Check if character is uppercase or lowercase
  char = char.toUpperCase();

  // Get the score from the dictionary or default to 0 (unknown character)
  return charWidths[char] || 0;
}

const textInput = (sentence) => {
  const input = new zim.TextInput({
    color: "black",
    size: 18,
    width: 400,
    height: 50,
    border: true,
    borderColor: "black",
    corner: 10,
    backgroundColor: "white",
    placeHolder: "Type Here",
    placeHolderColor: "gray",
  }).loc(308, 680.2); // adds a default input field to the stage

  // text input on update return the value of the input field
  input.on("input", () => {
    // get length of the input value
    var inputLength = input.text.length;
    // for each character in the input field
    console.log(input.text);
    console.log(sentence.substring(0, inputLength));
    if (input.text === sentence.substring(0, inputLength) && input.text != "") {
      for (var i = 0; i < inputLength; i++) {
        // create a text object for each character
        // space between text objects should be based on the width of the particular character
        // for W the space should be wider than the space for i
        var space = getCharWidthScore(input.text[i]);
        var text = new zim.Label({
          text: input.text[i],
          size: 30,
          color: "black",
          backgroundColor: "white",
          padding: 0,
          corner: 0,
        }).loc(268 + i * (space + 14), 640.2); // set the text object to a random location on the stage
        // whats the calculation for the location of the text object
      }
    }
  });
};

export default textInput;