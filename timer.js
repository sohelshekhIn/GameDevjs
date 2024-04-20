import zim from "https://zimjs.org/cdn/016/zim_game";
const clock = (stage) => {
  var timer = new Timer({
    time: 60,
    // startPaused:true,
    // step:500,
    // colon:true,
    borderColor: dark,
  })
    .tap(function () {
      timer.start(10);
      timer.backing.color = yellow;
    })
    .pos(30, 30, LEFT, BOTTOM); // .place();
  timer.on("complete", function () {
    timer.backing.color = red;
    timer.color = white;
    // stage.update();
    // console.log("Reached")

    // var children = stage.children;
    // console.log(S.children.Qo.Pic)
    girl.x = 400; // Change the x-coordinate to the desired position
    girl.y = 200; // Change the y-coordinate to the desired position
    stage.update();
  });
};

export default clock;
