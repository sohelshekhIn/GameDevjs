import zim from "https://zimjs.org/cdn/016/zim_game";

<<<<<<< HEAD
const textInput = () => {
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
=======

const textInput = (stage) => {
 

  // Create a TextInput field
  const input = new TextInput().pos(100, 100, LEFT, TOP); // Position as needed
>>>>>>> 96dc54e8944ea9e50891e861bbb5e46c0cd728d3
};

export default textInput;
