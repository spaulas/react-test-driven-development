import { Props as AppointmentItemProps } from "@components/AppointmentItem/types.d";

export type Props = {
  appointments: Array<{
    startsAt: number;
    customer: AppointmentItemProps["customer"];
  }>;
};
