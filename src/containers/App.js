import React, { useState, useEffect } from "react";
import Board from "containers/Board";
import BoardSize from "containers/BoardSize";
import Instructions from "containers/Instructions";

import Button from "common/Button";

const checkWinner = require("utils/checkWinner");

const App = () => {
  const [showBoardSize, showSetBoardSize] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [boardSize, setBoardSize] = useState(3);
  const [player, setPlayer] = useState(1);
  const [winner, setWinner] = useState(null);
  const [board, changeBoard] = useState([]);
  const [p1Fields, changeP1fields] = useState([]);
  const [p2Fields, changeP2fields] = useState([]);
  const [error, setError] = useState(null);

  const handleClick = () => {
    showSetBoardSize(!showBoardSize);
    setError(null);
  };

  const changeBoardSize = e => {
    const newBoardSize = parseInt(e.target.value, 10);

    if (newBoardSize < 3) {
      setError("Your value is too small, please choose one greater than 2.");
      return;
    }
    setError(null);

    setBoardSize(newBoardSize);
  };

  const setField = e => {
    if (gameOver) return setError("Game is over, please click restart.");

    const field = parseInt(e.target.id, 10);

    if (board[field])
      return setError("Field has already been set, please choose another.");

    setError(null);

    if (player === 1) {
      board[field] = "X";
      setPlayer(2);
      changeP1fields([...p1Fields, field]);
    } else {
      board[field] = "O";
      setPlayer(1);
      changeP2fields([...p2Fields, field]);
    }
  };

  const handleRestart = () => {
    if (!gameOver) {
      if (p1Fields.length || p2Fields.length) {
        const confirmText =
          "Game is not over yet, are you sure you want to restart?";
        if (!window.confirm(confirmText)) return;
      }
    }

    changeBoard([]);
    changeP1fields([]);
    changeP2fields([]);
    setGameOver(false);
    setWinner(null);
    setError(null);
  };

  useEffect(
    () => {
      if (player === 1 && checkWinner(p2Fields, boardSize)) {
        setGameOver(true);
        setWinner(2);
        return;
      } else if (player === 2 && checkWinner(p1Fields, boardSize)) {
        setGameOver(true);
        setWinner(1);
        return;
      }
      if (p1Fields.length + p2Fields.length === boardSize * boardSize) {
        setGameOver(true);
        setError("Noone won. Please restart.");
        return;
      }
    },
    [player, p1Fields, p2Fields, boardSize, winner]
  );

  const gameStarted = p1Fields.length || p2Fields.length;

  return (
    <div style={{ textAlign: "center", padding: "15px", fontSize: "1.5em" }}>
      <Instructions boardSize={boardSize} player={player} gameOver={gameOver} />

      <Board
        boardSize={boardSize}
        board={board}
        setField={setField}
        gameOver={gameOver}
      />

      <Button
        onClick={handleClick}
        disabled={gameStarted}
        title={"Change Board Size"}
      />

      {showBoardSize && !gameStarted && (
        <BoardSize
          boardSize={boardSize}
          changeBoardSize={changeBoardSize}
          hideBoardSize={handleClick}
        />
      )}

      <Button onClick={handleRestart} title={"Restart Game"} />

      {winner && (
        <div style={{ paddingTop: "30px", color: "green" }}>
          Player {winner} won!!!
        </div>
      )}

      {error && <div style={{ paddingTop: "30px", color: "red" }}>{error}</div>}
    </div>
  );
};

export default App;
