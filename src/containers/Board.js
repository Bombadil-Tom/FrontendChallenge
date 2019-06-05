import React from "react";
import "style/Board.css";

const Board = ({ boardSize, board, setField, gameOver }) => {
  const rows = [];

  for (let i = 0; i < boardSize; i++) {
    const cols = [];

    for (let j = 0; j < boardSize; j++) {
      const id = boardSize * i + j;

      const content = board[id] === null ? "" : board[id];

      cols.push(
        <td key={id} id={id} onClick={setField}>
          {content}
        </td>
      );
    }
    rows.push(<tr key={i}>{cols}</tr>);
  }

  const opacity = gameOver ? 0.4 : 1;

  return (
    <table style={{ opacity }}>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default Board;
