import React from "react";
import { AppointmentsList } from ".";
import ReactDOM from "react-dom";
import { Props } from "./types.d";
import ReactTestUtils from "react-dom/test-utils";

describe("<AppointmentList />", () => {
  let container: Element;

  beforeEach(() => {
    container = document.createElement("div");
  });

  const render = (component: JSX.Element) =>
    ReactDOM.render(component, container);

  const today = new Date();
  const appointments: Props["appointments"] = [
    {
      startsAt: today.setHours(12, 0),
      customer: {
        firstName: "Ashley",
      },
    },
    { startsAt: today.setHours(13, 0), customer: { firstName: "Jordan" } },
  ];
  it("renders the wrapper with the correct id", () => {
    render(<AppointmentsList appointments={appointments} />);

    expect(container.querySelector("div#appointmentsList")).not.toBeNull();
  });

  it("renders multiple appointments in an ol element", () => {
    render(<AppointmentsList appointments={appointments} />);

    const olElement = container.querySelector("ol");

    expect(olElement).not.toBeNull();
    expect(olElement?.children).toHaveLength(appointments.length);
  });

  it("renders each appointment in an li", () => {
    render(<AppointmentsList appointments={appointments} />);

    const liElements = container.querySelectorAll("li");

    expect(liElements).toHaveLength(appointments.length);
    expect(liElements[0].textContent).toEqual("12:00");
    expect(liElements[1].textContent).toEqual("13:00");
  });

  it("initially shows a message saying there are no appointments today", () => {
    render(<AppointmentsList appointments={[]} />);

    expect(container.textContent).toMatch(
      "There are no appointments scheduled for today"
    );
  });

  it("selects the first appointment by default", () => {
    render(<AppointmentsList appointments={appointments} />);
    expect(container.textContent).toMatch("Ashley");
  });

  it("has a button element in each li", () => {
    render(<AppointmentsList appointments={appointments} />);

    const buttons = container.querySelectorAll("li>button");

    expect(buttons).toHaveLength(appointments.length);
    expect((buttons[0] as any).type).toEqual("button");
  });

  it("renders another appointment when selected", () => {
    render(<AppointmentsList appointments={appointments} />);

    const button = container.querySelectorAll("button")[1];
    ReactTestUtils.Simulate.click(button);

    expect(container.textContent).toMatch("Jordan");
  });
});
