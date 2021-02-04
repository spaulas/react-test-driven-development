import React from "react";
import { Loading } from ".";
import { CreateContainerType, createContainer } from "@test/domManipulators";

describe("<AppointmentItem />", () => {
  let container: CreateContainerType["container"];
  let render: CreateContainerType["render"];

  beforeEach(() => {
    const result = createContainer();
    container = result.container;
    render = result.render;
  });

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
