import React from "react";
import { Props } from "./types";

function Appointments({ customer }: Props): JSX.Element {
  return <div>{customer.firstName}</div>;
}

export default Appointments;
