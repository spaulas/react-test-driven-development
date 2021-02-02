import { text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { Appointments as AppointmentsC } from ".";

export default {
  title: "Common/Appointments",
  component: AppointmentsC,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
  parameters: {
    options: { selectedPanel: "storybook/knobs/panel" },
  },
};

export const Appointments = (): JSX.Element => (
  <AppointmentsC
    customer={{
      firstName: text("FirstName", "Ashley"),
    }}
  />
);
