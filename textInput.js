import zim from "https://zimjs.org/cdn/016/zim_game";

const textInput = () => {
  // get width and height of the canvas
  // get frame width;
  // const height = S.height;
  // console.log(width, height);
  // location of text input is 90% of height
  // const loc = height - height * 0.9;
  const input = new zim.TextInput(500, 100, "Hello").loc(258, 650.2); // adds a default input field to the stage
};

export default textInput;
