import React from "react";
// enzyme library https://airbnb.io/enzyme/
import { mount } from "enzyme";
import App from "containers/App";
import Board from "containers/Board";

const setFields = nums => {
  for (let element of nums) {
    wrapped
      .find("td")
      .at(element)
      .simulate("click");
  }
};

const returnField = num =>
  wrapped
    .find("td")
    .at(num)
    .text();

let wrapped;

beforeEach(() => {
  wrapped = mount(<App />);
});

afterEach(() => {
  wrapped.unmount();
});

it("changes a field to the player's sign", () => {
  setFields([0, 1, 2, 8]);

  expect(returnField(0)).toBe("X");
  expect(returnField(1)).toBe("O");
  expect(returnField(2)).toBe("X");
  expect(returnField(8)).toBe("O");
});

describe("shows a winner", () => {
  beforeEach(() => {
    const style = { opacity: 1 };
    expect(wrapped.text()).not.toContain("won");
    expect(wrapped.find("table").prop("style")).toMatchObject(style);
  });

  afterEach(() => {
    const style = { opacity: 0.4 };
    expect(wrapped.find("table").prop("style")).toMatchObject(style);
  });

  it("for a diagonal match", () => {
    setFields([0, 2, 4, 5, 8]);
    expect(wrapped.text()).toContain("Player 1 won");
  });

  it("for a vertical match", () => {
    setFields([0, 2, 3, 5, 7, 8]);
    expect(wrapped.text()).toContain("Player 2 won");
  });

  it("for a horizontal match", () => {
    setFields([0, 3, 2, 4, 8, 7, 1]);
    expect(wrapped.text()).toContain("Player 1 won");
  });
});

describe("shows a winner for a 5x5 board", () => {
  beforeEach(() => {
    const style = { opacity: 1 };
    expect(wrapped.text()).not.toContain("won");
    expect(wrapped.find("table").prop("style")).toMatchObject(style);

    wrapped
      .find("button")
      .at(0)
      .simulate("click");

    wrapped.find("input").simulate("change", { target: { value: 5 } });
    wrapped.update();
  });

  afterEach(() => {
    const style = { opacity: 0.4 };
    expect(wrapped.find("table").prop("style")).toMatchObject(style);
  });

  it("for a diagonal match", () => {
    setFields([1, 0, 7, 6, 13, 12, 19, 18, 23, 24]);
    expect(wrapped.text()).toContain("Player 2 won");
  });

  it("for a vertical match", () => {
    setFields([0, 1, 5, 6, 10, 11, 15, 16, 20, 21]);
    expect(wrapped.text()).toContain("Player 1 won");
  });

  it("for a horizontal match", () => {
    setFields([6, 0, 7, 1, 8, 2, 9, 3, 10, 4]);
    expect(wrapped.text()).toContain("Player 2 won");
  });
});

describe("shows and hides errors", () => {
  const fieldSet = "Field has already been set, please choose another.";
  const gameOver = "Game is over, please click restart.";
  const draw = "Noone won.";
  beforeEach(() => {
    setFields([0, 1, 4, 5]);
    expect(wrapped.text()).not.toContain(fieldSet);
    expect(wrapped.text()).not.toContain(gameOver);
    expect(wrapped.text()).not.toContain(draw);
  });

  afterEach(() => {
    expect(wrapped.text()).not.toContain(fieldSet);
    expect(wrapped.text()).not.toContain(gameOver);
    expect(wrapped.text()).not.toContain(draw);
  });

  it("for a already played field", () => {
    wrapped
      .find("td")
      .at(0)
      .simulate("click");
    expect(wrapped.text()).toContain(fieldSet);

    wrapped
      .find("td")
      .at(6)
      .simulate("click");
  });

  it("game has ended", () => {
    setFields([8]);
    wrapped
      .find("td")
      .at(0)
      .simulate("click");

    expect(wrapped.text()).toContain(gameOver);

    wrapped
      .find("button")
      .at(1)
      .simulate("click");
  });

  it("Noone won.", () => {
    setFields([2, 6, 3, 8, 7]);

    expect(wrapped.text()).toContain(draw);

    wrapped
      .find("button")
      .at(1)
      .simulate("click");
  });
});
