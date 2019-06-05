import React from "react";

const Instructions = ({ boardSize, player, gameOver }) => {
  return (
    <div style={{ paddingTop: "15px", paddingBottom: "15px" }}>
      You need {boardSize} in a row (diagonally, horizontally or vertically) to
      win.
      <div style={{ paddingTop: "25px", height: "50px" }}>
        {!gameOver && `Player ${player}'s turn`}
      </div>
    </div>
  );
};

export default Instructions;
