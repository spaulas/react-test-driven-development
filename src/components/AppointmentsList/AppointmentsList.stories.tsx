import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { AppointmentsList as AppointmentsListC } from ".";

export default {
  title: "Common/Appointments",
  component: AppointmentsListC,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
  parameters: {
    options: { selectedPanel: "storybook/knobs/panel" },
  },
};

export const AppointmentsList = (): JSX.Element => <AppointmentsListC />;
