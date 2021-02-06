import React from "react";
import { CreateContainerType, createContainer } from "@test/domManipulators";
import { AppointmentForm } from ".";
import { FormKeys, FormType } from "./types.d";
import ReactTestUtils from "react-dom/test-utils";

describe("<AppointmentForm />", () => {
  let container: CreateContainerType["container"];
  let render: CreateContainerType["render"];

  const emptyProps = {
    services: [],
    values: {},
    onSubmit: () => null,
  };

  const defaultProps = {
    services: ["haircut", "color"],
    values: { service: "color" },
    onSubmit: () => null,
  };

  // ------------------------------
  // Helper Functions

  // returns the form with id "appointment"
  const formId = () =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    container.querySelector("form[id='appointment']") as any;

  // returns the field with fieldName from form with id "appointment"
  const formField = (fieldName: string) => formId()?.elements[fieldName];

  // searchs the DOM tree for a particular node
  const findOption = (dropdwonNode: Node, textContent: string) => {
    const options = Array.from(dropdwonNode.childNodes);
    return options.find((option) => option.textContent === textContent);
  };

  // ------------------------------
  // It functions

  // checks a form field's existence, tagName and type
  const itRendersFormTypeBox = (
    fieldName: FormKeys,
    tagName: string,
  ) => {
    it(`renders as a ${tagName} box`, () => {
      render(<AppointmentForm {...emptyProps} />);
      const field = formField(fieldName);
      expect(field).not.toBeNull();
      expect(field.tagName).toEqual(tagName);
    });
  };

  // checks if the field starts with a value
  const itIncludesInitialValue = (fieldName: FormKeys) => {
    it("includes the initial value", () => {
      render(<AppointmentForm {...defaultProps} />);
      const field = formField(fieldName);
      expect(field.value).toEqual(defaultProps.values[fieldName]?.toString());
    });
  };

  // checks if the label exists and has the correct value
  const itRendersLabel = (fieldName: FormKeys, labelValue: string) => {
    it("renders its label", () => {
      render(<AppointmentForm {...emptyProps} />);
      const label = container.querySelector(`label[for="${fieldName}"]`);
      expect(label?.textContent).toEqual(labelValue);
    });
  };

  // checks if the field has the same id of the label
  const itHasSameLabelId = (fieldName: FormKeys, idValue: string) => {
    it("has the same id as its label", () => {
      render(<AppointmentForm {...emptyProps} />);
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
        <AppointmentForm
          {...defaultProps}
          onSubmit={(values: FormType) =>
            expect(values[fieldName]).toEqual(defaultProps.values[fieldName])
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
        <AppointmentForm
          {...defaultProps}
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
    render(<AppointmentForm {...emptyProps} />);
    const form = formId();
    expect(form).not.toBeNull();
  });

  describe("service field", () => {

    it("initially has a blank value chosen", () => {
      render(<AppointmentForm {...emptyProps} />);

      const firstNode = formField("service").childNodes[0];
      expect(firstNode.value).toEqual("");
      expect(firstNode.selected).toBeTruthy();
    });

    it("lists all salon services", () => {
      render(<AppointmentForm {...defaultProps} />);

      const optionNodes: Array<Node> = Array.from(
        formField("service").childNodes
      );
      const renderedServices: Array<string | null> = optionNodes.map(
        (node: Node) => node.textContent
      );

      expect(renderedServices).toEqual(
        expect.arrayContaining(defaultProps.services)
      );
    });

    it("pre-selects the initial value", () => {
      render(<AppointmentForm {...defaultProps} />);

      const option = findOption(
        formField("service"),
        defaultProps.values.service
      );

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect((option as any).selected).toBeTruthy();
    });

    itRendersFormTypeBox("service", "SELECT");
    itIncludesInitialValue("service");
    itRendersLabel("service", "Service");
    itHasSameLabelId("service", "service");
    itSavesInitialValue("service");
    itSavesNewValue("service", "haircut");


  });
});
