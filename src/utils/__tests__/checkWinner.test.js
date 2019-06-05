const checkWinner = require("utils/checkWinner");

describe("A 3x3 board returns true", () => {
  const boardSize = 3;
  it("for a diagonal winner", () => {
    expect(checkWinner([2, 4, 6], boardSize)).toBe(true);
    expect(checkWinner([0, 4, 8], boardSize)).toBe(true);

    expect(checkWinner([1, 2, 4, 6], boardSize)).toBe(true);
    expect(checkWinner([0, 4, 8, 2], boardSize)).toBe(true);
  });

  it("for a horizontal winner", () => {
    expect(checkWinner([0, 1, 2], boardSize)).toBe(true);
    expect(checkWinner([3, 4, 5], boardSize)).toBe(true);
    expect(checkWinner([6, 7, 8], boardSize)).toBe(true);

    expect(checkWinner([0, 1, 2, 5], boardSize)).toBe(true);
    expect(checkWinner([8, 3, 4, 5], boardSize)).toBe(true);
    expect(checkWinner([6, 3, 7, 8], boardSize)).toBe(true);
  });

  it("for a vertical winner", () => {
    expect(checkWinner([0, 3, 6], boardSize)).toBe(true);
    expect(checkWinner([1, 4, 7], boardSize)).toBe(true);
    expect(checkWinner([2, 5, 8], boardSize)).toBe(true);

    expect(checkWinner([1, 0, 3, 6], boardSize)).toBe(true);
    expect(checkWinner([5, 1, 4, 7], boardSize)).toBe(true);
    expect(checkWinner([9, 2, 5, 8], boardSize)).toBe(true);
  });
});

describe("A 3x3 board returns false", () => {
  const boardSize = 3;
  it("if not enough values", () => {
    expect(checkWinner([2, 4], boardSize)).toBe(false);
    expect(checkWinner([0, 4], boardSize)).toBe(false);

    expect(checkWinner([0, 1], boardSize)).toBe(false);
    expect(checkWinner([3, 4], boardSize)).toBe(false);
    expect(checkWinner([6, 7], boardSize)).toBe(false);

    expect(checkWinner([0, 3], boardSize)).toBe(false);
    expect(checkWinner([1, 4], boardSize)).toBe(false);
    expect(checkWinner([2, 5], boardSize)).toBe(false);
  });

  it("if no winning sequence was given", () => {
    expect(checkWinner([2, 5, 6], boardSize)).toBe(false);
    expect(checkWinner([0, 2, 8], boardSize)).toBe(false);

    expect(checkWinner([0, 4, 6], boardSize)).toBe(false);
    expect(checkWinner([1, 8, 7], boardSize)).toBe(false);
    expect(checkWinner([2, 0, 8], boardSize)).toBe(false);

    expect(checkWinner([0, 3, 2], boardSize)).toBe(false);
    expect(checkWinner([3, 9, 5], boardSize)).toBe(false);
    expect(checkWinner([6, 0, 8], boardSize)).toBe(false);
  });
});
