import React from "react";
import { AppointmentItem } from ".";
import ReactDOM from "react-dom";
import { Props } from "./types";

describe("<AppointmentItem />", () => {
  let container: Element;
  let customer: Props["customer"];

  beforeEach(() => {
    container = document.createElement("div");
  });

  const render = (component: JSX.Element) =>
    ReactDOM.render(component, container);

  it("renders the customer's first name", () => {
    customer = { firstName: "Ashley" };

    render(<AppointmentItem customer={customer} />);

    expect(container.textContent).toMatch(customer.firstName);
  });

  it("renders another customer's first name", () => {
    customer = { firstName: "Jordan" };

    render(<AppointmentItem customer={customer} />);

    expect(container.textContent).toMatch(customer.firstName);
  });
});
