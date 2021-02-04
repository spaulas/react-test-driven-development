import React from "react";
import { AppointmentItem } from ".";
import ReactDOM from "react-dom";
import { Props } from "./types";

describe("<AppointmentItem />", () => {
  let container: Element;
  let customer: Props["customer"];
  let timeStamp: Props["timeStamp"];

  beforeEach(() => {
    container = document.createElement("div");
  });

  const render = (component: JSX.Element) =>
    ReactDOM.render(component, container);

  const checkPrintedData = (customer: Props["customer"]) => {
    expect(container.textContent).toMatch(`Todays appointment at ${timeStamp}`);

    expect(container.textContent).toMatch(`First Name: ${customer.firstName}`);
    expect(container.textContent).toMatch(`Last Name: ${customer.lastName}`);
    expect(container.textContent).toMatch(
      `Phone Number: ${customer.phoneNumber}`
    );
    expect(container.textContent).toMatch(`Stylist: ${customer.stylist}`);
    expect(container.textContent).toMatch(`Service: ${customer.service}`);
    expect(container.textContent).toMatch(`Notes: ${customer.notes}`);
  };

  it("renders the customer's appointment title and data", () => {
    customer = {
      firstName: "Ashley",
      lastName: "Holland",
      phoneNumber: 2154528734,
      stylist: "Deanne Andersen",
      service: "depilation",
      notes:
        "or again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. ",
    };
    timeStamp = "12:00";

    render(<AppointmentItem customer={customer} timeStamp={timeStamp} />);

    checkPrintedData(customer);
  });

  it("renders another customer's appointment title and data", () => {
    customer = {
      firstName: "Jordan",
      lastName: "Oconnell",
      phoneNumber: 2192240367,
      stylist: "Ingrid Johnson",
      service: "beard trim",
      notes:
        " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    };
    timeStamp = "9:00";

    render(<AppointmentItem customer={customer} timeStamp={timeStamp} />);

    checkPrintedData(customer);
  });
});
