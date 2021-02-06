import React from "react";
import Appointments from ".";
import { CreateContainerType, createContainer } from "@test/domManipulators";

describe("<Appointments />", () => {
  let container: CreateContainerType["container"];
  let render: CreateContainerType["render"];

  beforeEach(() => {
    const result = createContainer();
    container = result.container;
    render = result.render;
  });

  it("renders the wrapper with the correct id", () => {
    render(<Appointments />);

    expect(container.querySelector("div#appointments-page")).not.toBeNull();
  });

  it("should have a AppointmentsList", () => {
    render(<Appointments />);

    expect(
      container.querySelector("div#appointments-page>#appointments-list")
    ).not.toBeNull();
  });

  // TODO probably check the props passed to the AppointmentsList component

  // TODO this should be a button to open a modal after
  it("should have a link to the add customers page", () => {
    render(<Appointments />);

    const addButton = container.querySelector("div#appointments-page>a");

    expect(addButton?.textContent).toMatch("Add Customer");
  });
});
