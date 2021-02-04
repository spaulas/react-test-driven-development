import React from "react";
import { CreateContainerType, createContainer } from "@test/domManipulators";
import { CustomerForm } from ".";

describe("<CustomerForm />", () => {
  let container: CreateContainerType["container"];
  let render: CreateContainerType["render"];

  // ------------------------------
  // Helper Functions

  // returns the form with id "customer"
  const formId = () =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    container.querySelector("form[id='customer']") as any;

  // returns the field with fieldName from form with id "customer"
  const formField = (fieldName: string) => formId()?.elements[fieldName];

  // checks a form field's existence, tagName and type
  const expectField = (
    fieldName: string,
    tagName: string,
    type: string
  ): void => {
    const field = formField(fieldName);
    expect(field).not.toBeNull();
    expect(field.tagName).toEqual(tagName);
    expect(field.type).toEqual(type);
  };

  // checks if the field starts with a value
  const expectInitialValue = (fieldName: string, value: string): void => {
    const field = formField(fieldName);
    expect(field.value).toEqual(value);
  };

  // checks if the label exists and has the correct value
  const expectLabel = (fieldName: string, labelValue: string) => {
    const label = container.querySelector(`label[for="${fieldName}"]`);
    expect(label?.textContent).toEqual(labelValue);
  };

  // ------------------------------

  beforeEach(() => {
    const result = createContainer();
    container = result.container;
    render = result.render;
  });

  it("renders a form", () => {
    render(<CustomerForm />);
    const form = formId();
    expect(form).not.toBeNull();
  });

  it("renders the first name field as a text box", () => {
    render(<CustomerForm />);
    expectField("firstName", "INPUT", "text");
  });

  it("includes the existing value for the first name", () => {
    render(<CustomerForm firstName="Ashley" />);
    expectInitialValue("firstName", "Ashley");
  });

  it("renders a label for the first name field", () => {
    render(<CustomerForm />);
    expectLabel("firstName", "First Name");
  });

  it("assigns an id that matches the label id to the first name field", () => {
    render(<CustomerForm />);
    expect(formField("firstName").id).toEqual("firstName");
  });
});
