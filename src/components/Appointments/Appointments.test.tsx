import React from "react";
import {Appointments} from ".";
import ReactDOM from "react-dom";
import { Props } from "./types.d"

describe("<Appointments />", () => {
  let container: Element;
  let customer: Props["customer"];

  beforeEach(() => {
    container = document.createElement("div");
  });

  const render = (component: JSX.Element) =>
    ReactDOM.render(component, container);

  it("renders the customer first name", () => {
    customer = { firstName: "Ashley" };

    render(<Appointments customer={customer} />);

    expect(container.textContent).toMatch("Ashley");
  });
});
