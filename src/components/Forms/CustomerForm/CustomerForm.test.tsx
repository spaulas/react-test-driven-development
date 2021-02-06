import React from "react";
import { CreateContainerType, createContainer } from "@test/domManipulators";
import { CustomerForm } from ".";
import ReactTestUtils from "react-dom/test-utils";
import { FormType, FormKeys } from "./types.d";

describe("<CustomerForm />", () => {
  let container: CreateContainerType["container"];
  let render: CreateContainerType["render"];

  const emptyProps = {
    values: {},
    onSubmit: () => null,
  };

  const initialValues: FormType = {
    firstName: "Ashley",
    lastName: "Page",
    phoneNumber: 123456789,
  };

  // ------------------------------
  // Helper Functions

  // returns the form with id "customer"
  const formId = () =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    container.querySelector("form[id='customer']") as any;

  // returns the field with fieldName from form with id "customer"
  const formField = (fieldName: FormKeys) => formId()?.elements[fieldName];

  // ------------------------------
  // It functions

  // checks a form field's existence, tagName and type
  const itRendersTextBox = (
    fieldName: FormKeys,
    tagName: string,
    type: string
  ) => {
    it("renders as a text box", () => {
      render(<CustomerForm {...emptyProps} />);
      const field = formField(fieldName);
      expect(field).not.toBeNull();
      expect(field.tagName).toEqual(tagName);
      expect(field.type).toEqual(type);
    });
  };

  // checks if the field starts with a value
  const itIncludesInitialValue = (fieldName: FormKeys) => {
    it("includes the initial value", () => {
      render(<CustomerForm {...emptyProps} values={initialValues} />);
      const field = formField(fieldName);
      expect(field.value).toEqual(initialValues[fieldName]?.toString());
    });
  };

  // checks if the label exists and has the correct value
  const itRendersLabel = (fieldName: FormKeys, labelValue: string) => {
    it("renders its label", () => {
      render(<CustomerForm {...emptyProps} />);
      const label = container.querySelector(`label[for="${fieldName}"]`);
      expect(label?.textContent).toEqual(labelValue);
    });
  };

  // checks if the field has the same id of the label
  const itHasSameLabelId = (fieldName: FormKeys, idValue: string) => {
    it("has the same id as its label", () => {
      render(<CustomerForm {...emptyProps} />);
      expect(formField(fieldName).id).toEqual(idValue);
    });
  };

  // check if the initial values are submitted
  const itSavesInitialValue = (fieldName: FormKeys) => {
    // this test return a promise, therefore the test runner should wait for the promise to be resolved
    it("saves initial value when submitted", async () => {
      // should expect at least one assertion to occur
      expect.hasAssertions();
      render(
        <CustomerForm
          values={initialValues}
          onSubmit={(values: FormType) =>
            expect(values[fieldName]).toEqual(initialValues[fieldName])
          }
        />
      );

      ReactTestUtils.Simulate.submit(formId());
    });
  };

  // check if the new values are submitted
  const itSavesNewValue = (fieldName: FormKeys, newValue: string | number) => {
    it("saves new value when submitted", async () => {
      expect.hasAssertions();
      render(
        <CustomerForm
          values={initialValues}
          onSubmit={(values: FormType) =>
            expect(values[fieldName]).toEqual(newValue)
          }
        />
      );

      ReactTestUtils.Simulate.change(formField(fieldName), {
        target: { value: newValue },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any);
      ReactTestUtils.Simulate.submit(formId());
    });
  };

  // ------------------------------

  beforeEach(() => {
    const result = createContainer();
    container = result.container;
    render = result.render;
  });

  it("renders a form", () => {
    render(<CustomerForm {...emptyProps} />);
    const form = formId();
    expect(form).not.toBeNull();
  });

  it("has a submit button", () => {
    render(<CustomerForm {...emptyProps} />);
    const submitButton = container.querySelector("input[type='submit']");
    expect(submitButton).not.toBeNull();
  });

  describe("firstName field", () => {
    itRendersTextBox("firstName", "INPUT", "text");
    itIncludesInitialValue("firstName");
    itRendersLabel("firstName", "First Name");
    itHasSameLabelId("firstName", "firstName");
    itSavesInitialValue("firstName");
    itSavesNewValue("firstName", "Jamie");
  });

  describe("lastName field", () => {
    itRendersTextBox("lastName", "INPUT", "text");
    itIncludesInitialValue("lastName");
    itRendersLabel("lastName", "Last Name");
    itHasSameLabelId("lastName", "lastName");
    itSavesInitialValue("lastName");
    itSavesNewValue("lastName", "McCarthy");
  });

  describe("phoneNumber field", () => {
    itRendersTextBox("phoneNumber", "INPUT", "number");
    itIncludesInitialValue("phoneNumber");
    itRendersLabel("phoneNumber", "Phone Number");
    itHasSameLabelId("phoneNumber", "phoneNumber");
    itSavesInitialValue("phoneNumber");
    itSavesNewValue("phoneNumber", 987654321);
  });
});
