/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { CreateContainerType, createContainer } from "@test/domManipulators";
import { TimeSlots } from ".";
import ReactTestUtils from "react-dom/test-utils";

describe("<TimeSlots />", () => {
  let container: CreateContainerType["container"];
  let render: CreateContainerType["render"];

  const defaultProps = {
    openingTime: 9,
    closingTime: 19,
    today: new Date(),
    id: "startsAt",
    name: "startsAt",
    availableTimeSlots: [],
    onChange: () => null,
  };

  const availableTimeSlots = [
    { startsAt: defaultProps.today.setHours(9, 0, 0, 0) },
    { startsAt: defaultProps.today.setHours(9, 30, 0, 0) },
  ];

  // --------------------
  // Helper functions

  const getTotalSlots = (openingTime: number, closingTime: number) =>
    (closingTime - openingTime) * 2;

  const startsAtField = (index: number): any =>
    container.querySelectorAll(`input[name='${defaultProps.name}'`)[index];
  // --------------------

  beforeEach(() => {
    const result = createContainer();
    container = result.container;
    render = result.render;
  });

  it("renders a time slot for every half an hour between open and close times", () => {
    render(<TimeSlots {...defaultProps} />);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const timesOfDay = container.querySelectorAll("table>tbody>tr");
    const totalSlots = getTotalSlots(
      defaultProps.openingTime,
      defaultProps.closingTime
    );

    expect(timesOfDay).toHaveLength(totalSlots);
    expect(timesOfDay[0].querySelector("td")?.textContent).toEqual("09:00");
    expect(timesOfDay[1].querySelector("td")?.textContent).toEqual("09:30");
    expect(timesOfDay[totalSlots - 1].querySelector("td")?.textContent).toEqual(
      "18:30"
    );
  });

  it("renders an empty cell at the start of the header row", () => {
    render(<TimeSlots {...defaultProps} />);

    const headerRow = container.querySelector("table>thead>tr") as any;

    expect(headerRow.firstChild.textContent).toEqual("");
  });

  it("renders a week of available dates", () => {
    render(<TimeSlots {...defaultProps} today={new Date(2018, 11, 1)} />);

    const dates = container.querySelectorAll(
      "table>thead>tr>th:not(:first-child)"
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) as any;

    expect(dates).toHaveLength(7);
    expect(dates[0].textContent).toEqual("Sat 01");
    expect(dates[1].textContent).toEqual("Sun 02");
    expect(dates[6].textContent).toEqual("Fri 07");
  });

  it("renders a radio button for each time slot", () => {
    render(
      <TimeSlots {...defaultProps} availableTimeSlots={availableTimeSlots} />
    );

    const cells = container.querySelectorAll("table>tbody>tr");

    expect(cells[0].querySelector("input[type='radio']")).not.toBe(null);
    expect(cells[1].querySelector("input[type='radio']")).not.toBe(null);
  });

  it("does not render radio buttons for unavailable time slots", () => {
    render(<TimeSlots {...defaultProps} availableTimeSlots={[]} />);

    const cells = container.querySelectorAll(
      "table>tbody>tr>td>input[type='radio']"
    );
    expect(cells).toHaveLength(0);
  });

  it("sets radio button values to the index of the corresponding appointment", () => {
    render(
      <TimeSlots {...defaultProps} availableTimeSlots={availableTimeSlots} />
    );

    expect(startsAtField(0).value).toEqual(
      availableTimeSlots[0].startsAt.toString()
    );
    expect(startsAtField(1).value).toEqual(
      availableTimeSlots[1].startsAt.toString()
    );
  });

  it("pre selects the initial value", () => {
    render(
      <TimeSlots
        {...defaultProps}
        availableTimeSlots={availableTimeSlots}
        value={availableTimeSlots[0].startsAt}
      />
    );

    // get the checked input
    const checkedInput: any = Object.values(
      container.querySelectorAll("input[type=radio]")
    ).filter((radio: any) => radio.checked);

    expect(checkedInput).toHaveLength(1);
    expect(checkedInput[0].value).toEqual(
      availableTimeSlots[0].startsAt.toString()
    );
  });

  it("saves new value when changes", () => {
    expect.hasAssertions();

    render(
      <TimeSlots
        {...defaultProps}
        availableTimeSlots={availableTimeSlots}
        value={availableTimeSlots[0].startsAt}
        onChange={(startsAt) =>
          expect(startsAt).toEqual(availableTimeSlots[1].startsAt)
        }
      />
    );

    ReactTestUtils.Simulate.change(startsAtField(1), {
      target: {
        value: availableTimeSlots[1].startsAt,
        name: "startsAt",
      } as any,
    });
  });
});
