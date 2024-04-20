// leaderboard.js

// Define sample data for leaderboard
const leaderboardData = [
    { username: "Player1", score: 100 },
    { username: "Player2", score: 90 },
    { username: "Player3", score: 80 },
    { username: "Player4", score: 70 },
    { username: "Player5", score: 60 }
];

// Function to render leaderboard
function renderLeaderboard() {
    const leaderboardTable = document.getElementById("leaderboard-table");
    leaderboardTable.innerHTML = ""; // Clear previous entries
    
    // Create table header
    const headerRow = document.createElement("tr");
    const rankHeader = document.createElement("th");
    rankHeader.textContent = "No.";
    const usernameHeader = document.createElement("th");
    usernameHeader.textContent = "Username";
    const scoreHeader = document.createElement("th");
    scoreHeader.textContent = "Score";
    headerRow.appendChild(rankHeader);
    headerRow.appendChild(usernameHeader);
    headerRow.appendChild(scoreHeader);
    leaderboardTable.appendChild(headerRow);
    
    // Populate table with leaderboard data
    leaderboardData.forEach((entry, index) => {
        const row = document.createElement("tr");
        const rankCell = document.createElement("td");
        rankCell.textContent = index + 1;
        const usernameCell = document.createElement("td");
        usernameCell.textContent = entry.username;
        const scoreCell = document.createElement("td");
        scoreCell.textContent = entry.score;
        row.appendChild(rankCell);
        row.appendChild(usernameCell);
        row.appendChild(scoreCell);
        leaderboardTable.appendChild(row);
    });
}

// Function to update user's score
function updateUserScore(score) {
    const userScoreElement = document.getElementById("user-score");
    userScoreElement.textContent = "Your Score: " + score;
}

// Function to initialize leaderboard page
function initLeaderboardPage() {
    const gameNameElement = document.getElementById("game-name");
    gameNameElement.textContent = "Lava_Walk";

    const userScore = 120; // Sample user score, replace with actual score
    updateUserScore(userScore);

    renderLeaderboard();
}

// Call initLeaderboardPage function when the page loads
window.onload = initLeaderboardPage;
