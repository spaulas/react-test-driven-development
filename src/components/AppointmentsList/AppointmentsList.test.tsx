import React from "react";
import { AppointmentsList } from ".";
import { Props } from "./types.d";
import ReactTestUtils from "react-dom/test-utils";
import { CreateContainerType, createContainer } from "@test/domManipulators";

describe("<AppointmentList />", () => {
  let container: CreateContainerType["container"];
  let render: CreateContainerType["render"];

  beforeEach(() => {
    const result = createContainer();
    container = result.container;
    render = result.render;
  });

  const today = new Date();
  const appointments: Props["appointments"] = [
    {
      startsAt: today.setHours(12, 0),
      customer: {
        firstName: "Ashley",
        lastName: "Holland",
        phoneNumber: 2154528734,
        stylist: "Deanne Andersen",
        service: "depilation",
        notes:
          "or again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. ",
      },
    },
    {
      startsAt: today.setHours(13, 0),
      customer: {
        firstName: "Jordan",
        lastName: "Oconnell",
        phoneNumber: 2192240367,
        stylist: "Ingrid Johnson",
        service: "beard trim",
        notes:
          " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
  ];
  it("renders the wrapper with the correct id", () => {
    render(<AppointmentsList appointments={appointments} />);

    expect(container.querySelector("div#appointments-list")).not.toBeNull();
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

    const appointmentItem = container.querySelectorAll("#appointment-item");
    expect(appointmentItem[0].textContent).toMatch("Ashley");
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
