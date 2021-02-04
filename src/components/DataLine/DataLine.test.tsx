import React from "react";
import { DataLine } from ".";
import { CreateContainerType, createContainer } from "@test/domManipulators";

describe("<DataLine />", () => {
  let container: CreateContainerType["container"];
  let render: CreateContainerType["render"];

  beforeEach(() => {
    const result = createContainer();
    container = result.container;
    render = result.render;
  });

  it("renders the wrapper with the correct id", () => {
    const field = "Last Name";
    const content = "Page";
    render(<DataLine<string> field={field} content={content} />);

    expect(container.querySelector("div#data-line")).not.toBeNull();
  });

  it("renders a data of type string", () => {
    const field = "First Name";
    const content = "Ashley";

    render(<DataLine<string> field={field} content={content} />);

    expect(container.textContent).toMatch(`${field}: ${content}`);
  });

  it("renders a data of type number", () => {
    const field = "Phone Number";
    const content = 123456789;

    render(<DataLine<number> field={field} content={content} />);

    expect(container.textContent).toMatch(`${field}: ${content}`);
  });
});
