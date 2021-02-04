import { text, number, select, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { AppointmentItem as AppointmentItemC } from ".";
import { SERVICES } from "@constants/enum";

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
  haircut: SERVICES.HAIRCUT,
  beardtrim: SERVICES.BEARDTRIM,
  nails: SERVICES.NAILS,
  depilation: SERVICES.DEPILATION,
};

export const AppointmentItem = (): JSX.Element => (
  <AppointmentItemC
    timeStamp="12:00"
    customer={{
      firstName: text("First Name", "Ashley"),
      lastName: text("Last Name", "Page"),
      phoneNumber: number("Phone Number", 123456789),
      service: select("Service", serviceOptions, SERVICES.HAIRCUT),
      stylist: text("Stylist", "Deanne Andersen"),
      notes: text("Notes", "Add notes here"),
    }}
  />
);
