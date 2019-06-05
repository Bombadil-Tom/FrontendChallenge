import React from "react";
// enzyme library https://airbnb.io/enzyme/
import { shallow } from "enzyme";
import Instructions from "containers/Instructions";

it("shows correct board size", () => {
  let size = 3;
  let wrapped = shallow(<Instructions boardSize={size} player={1} />);
  expect(wrapped.text()).toContain(`You need ${size}`);

  size = 4;
  wrapped = shallow(<Instructions boardSize={size} player={1} />);
  expect(wrapped.text()).toContain(`You need ${size}`);

  size = 5;
  wrapped = shallow(<Instructions boardSize={size} player={1} />);
  expect(wrapped.text()).toContain(`You need ${size}`);
});

it("shows correct currnet player", () => {
  let player = 1;
  let wrapped = shallow(<Instructions boardSize={3} player={player} />);
  expect(wrapped.text()).toContain(`Player ${player}`);

  player = 2;
  wrapped = shallow(<Instructions boardSize={3} player={player} />);
  expect(wrapped.text()).toContain(`Player ${player}`);

  player = 1;
  wrapped = shallow(<Instructions boardSize={3} player={player} />);
  expect(wrapped.text()).toContain(`Player ${player}`);
});
