import { text, withKnobs } from "@storybook/addon-knobs";
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

export const AppointmentItem = (): JSX.Element => (
  <AppointmentItemC
    customer={{
      firstName: text("FirstName", "Ashley"),
    }}
  />
);
