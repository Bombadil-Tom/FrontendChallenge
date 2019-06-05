import React from "react";
// enzyme library https://airbnb.io/enzyme/
import { mount } from "enzyme";
import App from "containers/App";

let wrapped;

beforeEach(() => {
  wrapped = mount(<App />);
});

afterEach(() => {
  wrapped.unmount();
});

it("toggles input field on after clicking and on blur", () => {
  expect(wrapped.find("input").length).toBe(0);

  wrapped
    .find("button")
    .at(0)
    .simulate("click");

  expect(wrapped.find("input").length).toBe(1);

  wrapped
    .find("td")
    .at(0)
    .simulate("click");

  expect(wrapped.find("input").length).toBe(0);
});

it("toggles input field on after clicking and on blur", () => {
  expect(wrapped.find("input").length).toBe(0);

  wrapped
    .find("button")
    .at(0)
    .simulate("click");

  expect(wrapped.find("input").length).toBe(1);

  wrapped.find("input").simulate("change", {
    target: { value: 5 }
  });
  wrapped.update();

  wrapped
    .find("td")
    .at(0)
    .simulate("click");

  expect(wrapped.find("input").length).toBe(0);
});

it("changes the board size", () => {
  const boardSize = 3;

  expect(wrapped.find("td").length).toBe(boardSize * boardSize);

  const newBoardSize = 5;

  wrapped
    .find("button")
    .at(0)
    .simulate("click");

  wrapped.find("input").simulate("change", {
    target: { value: newBoardSize }
  });
  wrapped.update();

  expect(wrapped.find("td").length).toBe(newBoardSize * newBoardSize);
});
