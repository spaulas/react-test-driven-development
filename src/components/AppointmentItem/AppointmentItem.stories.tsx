import { text, number, select, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { AppointmentItem as AppointmentItemC } from ".";


export default {
  title: "Common/Appointments",
  component: AppointmentItemC,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
  parameters: {
    options: { selectedPanel: "storybook/knobs/panel" },
  },
};

const serviceOptions = {
  haircut: "Haircut",
  beardtrim: "Beard Trim",
  extensions: "Extensions",
};

export const AppointmentItem = (): JSX.Element => (
  <AppointmentItemC
    timeStamp="12:00"
    customer={{
      firstName: text("First Name", "Ashley"),
      lastName: text("Last Name", "Page"),
      phoneNumber: number("Phone Number", 123456789),
      service: select("Service", serviceOptions, "haircut"),
      stylist: text("Stylist", "Deanne Andersen"),
      notes: text("Notes", "Add notes here"),
    }}
  />
);
