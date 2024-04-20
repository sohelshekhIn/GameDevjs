import zim from "https://zimjs.org/cdn/016/zim_game";

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
};

export default textInput;