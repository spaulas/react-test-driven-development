import React from "react";
import AddCustomer from ".";
import { CreateContainerType, createContainer } from "@test/domManipulators";

describe("Add Customer Page", () => {
  let container: CreateContainerType["container"];
  let render: CreateContainerType["render"];

  beforeEach(() => {
    const result = createContainer();
    container = result.container;
    render = result.render;
  });

  it("renders the wrapper with the correct id", () => {
    render(<AddCustomer />);

    expect(container.querySelector("div#add-customer-page")).not.toBeNull();
  });

  it("renders a title", () => {
    render(<AddCustomer />);

    expect(
      container.querySelector(".add-customer-page--title")?.textContent
    ).toEqual("Add a new Customer");
  });

  it("renders the customer form", () => {
    render(<AddCustomer />);
    expect(
      container.querySelector("div#add-customer-page>form[id='customer']")
    ).not.toBeNull();
  });
});
