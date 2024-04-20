import zim from "https://zimjs.org/cdn/016/zim_game";

const lava = () => {
    var s5 = new Squiggle({ color: "black", interactive: false }).loc(500, 500);
    s5.appendPoints([[s5.width, 0], [s5.width, 150], [0, 150]], "free");
    var b2 = s5.makeBlob("free").loc(s5);
    b2.color = "red";
    b2.gradient = ["#FF4500", "#FA8200", "#FF4500"]; // Orange gradient
    b2.animate({
        time: 0.7, // Set the duration of the animation
        from: true // Start the animation from the current state
    });
    // Functions to increase and decrease the height of the lava
    const increaseHeight = () => {
        b2.height += 10; // Increase height by 10 pixels
    };

    const decreaseHeight = () => {
        b2.height -= 10; // Decrease height by 10 pixels
    };

    return { b2, increaseHeight, decreaseHeight };
};

export default lava;
