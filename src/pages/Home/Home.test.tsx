import React from "react";
import Home from ".";
import { CreateContainerType, createContainer } from "@test/domManipulators";
import { MemoryRouter } from "react-router-dom";

// TODO remove MemoryRouter and mock Router
describe("Home Page", () => {
  let container: CreateContainerType["container"];
  let render: CreateContainerType["render"];

  // -------------------------
  // Helper functions
  const getLinks = () => container.querySelectorAll("div#home-page>a");

  // -------------------------
  // It functions
  const itRendersLink = (
    linkIndex: number,
    linkName: string,
    linkUrl: string
  ) => {
    it(`${linkName} link should point to ${linkUrl}`, () => {
      render(
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      );

      const link = getLinks()[linkIndex];
      expect(link.textContent).toMatch(linkName);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect((link as any).href).toMatch(linkUrl);
    });
  };

  // -------------------------

  beforeEach(() => {
    const result = createContainer();
    container = result.container;
    render = result.render;
  });

  it("renders the wrapper with the correct id", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(container.querySelector("div#home-page")).not.toBeNull();
  });

  it("should have 3 links", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const links = getLinks();
    expect(links).toHaveLength(3);
  });

  itRendersLink(0, "Appointments", "/appointments");
  itRendersLink(1, "Add Customer", "/add-customer");
  itRendersLink(2, "Add Appointment", "/add-appointment");
});
