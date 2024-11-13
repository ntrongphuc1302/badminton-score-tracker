let player1Score = 0;
let player2Score = 0;

// Function to update the score display
function updateUI() {
  document.getElementById("player1-score").textContent =
    player1Score < 10 ? `0${player1Score}` : player1Score;
  document.getElementById("player2-score").textContent =
    player2Score < 10 ? `0${player2Score}` : player2Score;
}

// Handle clicks on the scoreboard
function handleClick(event) {
  const boardWidth = event.target.closest(".scoreboard").offsetWidth;
  const boardHeight = event.target.closest(".scoreboard").offsetHeight;

  const clickX = event.clientX - event.target.closest(".scoreboard").offsetLeft;
  const clickY = event.clientY - event.target.closest(".scoreboard").offsetTop;

  // Check if click is in Player 1's or Player 2's area
  if (clickX < boardWidth / 2) {
    // Left side: Player 1
    if (clickY < boardHeight / 2) {
      // Subtract point from Player 1
      player1Score = player1Score > 0 ? player1Score - 1 : 0;
    } else {
      // Add point to Player 1
      player1Score++;
    }
  } else {
    // Right side: Player 2
    if (clickY < boardHeight / 2) {
      // Subtract point from Player 2
      player2Score = player2Score > 0 ? player2Score - 1 : 0;
    } else {
      // Add point to Player 2
      player2Score++;
    }
  }

  // Update the UI with the new scores
  updateUI();
}

// Initial UI update
updateUI();
