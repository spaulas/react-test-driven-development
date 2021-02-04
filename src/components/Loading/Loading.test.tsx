import React from "react";
import { Loading } from ".";
import ReactDOM from "react-dom";

describe("<AppointmentItem />", () => {
  let container: Element;

  beforeEach(() => {
    container = document.createElement("div");
  });

  const render = (component: JSX.Element) =>
    ReactDOM.render(component, container);

  const ChildrenComponent = () => <div id="child">Child Component</div>;

  it("renders with the correct className with loading false", () => {
    render(
      <Loading loading={false}>
        <ChildrenComponent />
      </Loading>
    );
    expect(container.querySelector("div.loading-wrapper.loading")).toBeNull();
  });

  it("renders with the correct className with loading true", () => {
    render(
      <Loading loading>
        <ChildrenComponent />
      </Loading>
    );
    expect(
      container.querySelector("div.loading-wrapper.loading")
    ).not.toBeNull();
  });

  it("renders with the children component", () => {
    render(
      <Loading loading={false}>
        <ChildrenComponent />
      </Loading>
    );
    expect(
      container.querySelector("div#loading-wrapper>#child")
    ).not.toBeNull();
  });
});
