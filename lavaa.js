import zim from "https://zimjs.org/cdn/016/zim_game";
// Function to draw the lava flow

function drawLava() {
  // Clear the canvas
  var clearRect = new zim.Rectangle(0, 0, S.width, S.height);

  // Create a linear gradient
  var gradient = zim.createLinearGradient(0, S.height, S.width, 0);
  colors.forEach(function (color, index) {
    gradient.addColorStop(index / (color.length - 1), color);
  });

  // Fill the canvas with the gradient
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Create a new layer for the lava flow animation
  var lavaLayer = zim.layer();

  // Draw the lava flow animation
  lavaLayer.path("M0,0 C200,100 400,-100 600,0").fill("#FF4136").animate({
    duration: 2000,
    iterations: Infinity,
    direction: "alternate",
    easing: "easeInOutSine",
    property: "path",
    to: "M0,100 C200,0 400,100 600,0",
  });
}

export default drawLava;
