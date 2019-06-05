import React from "react";
import Input from "common/Input";

const BoardSize = ({ boardSize, changeBoardSize, hideBoardSize }) => {
  return (
    <div>
      <Input
        value={boardSize}
        onChange={changeBoardSize}
        onBlur={hideBoardSize}
      />
      Current Board Size: {boardSize} x {boardSize}
    </div>
  );
};

export default BoardSize;
