document.addEventListener("DOMContentLoaded", function () {
  // Initialize score variables
  let score1 = 0; // Score for Team 1 (Left Team)
  let score2 = 0; // Score for Team 2 (Right Team)

  let scoreDisplay1 = document.getElementById("score1");
  let scoreDisplay2 = document.getElementById("score2");

  // Function to update scores and check for winner
  function updateScores() {
    // Update score displays
    scoreDisplay1.textContent = formatScore(score1);
    scoreDisplay2.textContent = formatScore(score2);

    // Check if someone has won the game
    if (score1 >= 21 && score1 - score2 >= 2) {
      alert("Team 1 wins the game!");
      resetScores();
    } else if (score2 >= 21 && score2 - score1 >= 2) {
      alert("Team 2 wins the game!");
      resetScores();
    }
  }

  // Helper function to format the score as "00" (two digits)
  function formatScore(score) {
    return score < 10 ? `0${score}` : score;
  }

  // Function to reset the colors of the zones to black
  function resetZoneColors() {
    document.querySelector(".zone-1").style.backgroundColor = "#000"; // Black
    document.querySelector(".zone-2").style.backgroundColor = "#000"; // Black
    document.querySelector(".zone-3").style.backgroundColor = "#000"; // Black
    document.querySelector(".zone-4").style.backgroundColor = "#000"; // Black
  }

  // Function to highlight the zones based on the scoring team (Green for 1 second)
  function highlightGreenZones(scoringTeam) {
    // Reset the colors to black before highlighting
    resetZoneColors();

    if (scoringTeam === "left") {
      // Team 1 scores, highlight Zone 1 and Zone 2 in green for 1 second
      document.querySelector(".zone-1").style.backgroundColor = "#4caf50"; // Green
      document.querySelector(".zone-2").style.backgroundColor = "#4caf50"; // Green
      setTimeout(resetZoneColors, 500); // Reset after 1 second
    } else if (scoringTeam === "right") {
      // Team 2 scores, highlight Zone 3 and Zone 4 in green for 1 second
      document.querySelector(".zone-3").style.backgroundColor = "#4caf50"; // Green
      document.querySelector(".zone-4").style.backgroundColor = "#4caf50"; // Green
      setTimeout(resetZoneColors, 500); // Reset after 1 second
    }
  }

  // Function to flash red (for 1 second) and restore the original color
  function flashRed(zoneSelector) {
    const zone = document.querySelector(zoneSelector);
    // Temporarily set the zone color to red
    zone.style.backgroundColor = "#f44336"; // Red
    // Reset the color back to black after 1 second
    setTimeout(() => {
      zone.style.backgroundColor = "#000"; // Black
    }, 1000); // Flash red for 1 second
  }

  // Event listeners for the zones
  document.querySelector(".zone-1").addEventListener("click", function () {
    if (score1 > 0) {
      score1--; // Decrease left team score, no going below 0
      flashRed(".zone-1"); // Flash red for Zone 1
      flashRed(".zone-2"); // Flash red for Zone 2
      updateScores();
    }
  });

  document.querySelector(".zone-2").addEventListener("click", function () {
    if (score1 < 30) {
      score1++; // Increase left team score
      highlightGreenZones("left"); // Highlight Zone 1 and 2 for Team 1
      updateScores();
    }
  });

  document.querySelector(".zone-3").addEventListener("click", function () {
    if (score2 > 0) {
      score2--; // Decrease right team score, no going below 0
      flashRed(".zone-3"); // Flash red for Zone 3
      flashRed(".zone-4"); // Flash red for Zone 4
      updateScores();
    }
  });

  document.querySelector(".zone-4").addEventListener("click", function () {
    if (score2 < 30) {
      score2++; // Increase right team score
      highlightGreenZones("right"); // Highlight Zone 3 and 4 for Team 2
      updateScores();
    }
  });

  // Reset the score when a team wins
  function resetScores() {
    score1 = 0;
    score2 = 0;
    updateScores();
    resetZoneColors(); // Reset colors to black after game ends
  }

  // Initial display of scores
  updateScores();
});
