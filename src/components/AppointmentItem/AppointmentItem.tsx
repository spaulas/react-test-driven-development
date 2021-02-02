import React from "react";
import { Props } from "./types";

function AppointmentItem({ customer }: Props): JSX.Element {
  return <div>{customer.firstName}</div>;
}

export default AppointmentItem;