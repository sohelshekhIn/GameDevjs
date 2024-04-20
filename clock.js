const clock = (stage) => {
    const { Label } = zim;

    // Create a label for the timer
    const timerLabel = new Label("00:00:00", 24, "Arial", "#333").center(stage);

    let startTime = Date.now();

    function updateTimer() {
        let elapsedTime = Date.now() - startTime;
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

        const timeString = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
        timerLabel.text = timeString;

        setTimeout(updateTimer, 1000); // Call updateTimer again after 1 second

        
    }

    function pad(num) {
        return (num < 10 ? "0" : "") + num;
    }

    updateTimer(); // Start the timer initially
};

export default clock;
