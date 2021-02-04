import React from "react";
import { DataLine } from ".";
import ReactDOM from "react-dom";

describe("<DataLine />", () => {
  let container: Element;

  beforeEach(() => {
    container = document.createElement("div");
  });

  const render = (component: JSX.Element) =>
    ReactDOM.render(component, container);

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
