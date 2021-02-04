import React from "react";
import { Props } from "./types";
import { DataLine } from "@components/DataLine";
import "./AppointmentItem.scss";

function AppointmentItem({
  customer: { firstName, lastName, phoneNumber, service, stylist, notes },
  timeStamp,
  extraClass=""
}: Props): JSX.Element {
  return (
    <div id="appointment-item" className={`appointment-item ${extraClass}`}>
      <h4 className="appointment-item--title">
        Todays appointment at {timeStamp}
      </h4>

      <div className="appointment-item--data-container">
        <DataLine<typeof firstName> field="First Name" content={firstName} />
        <DataLine<typeof lastName> field="Last Name" content={lastName} />
        <DataLine<typeof phoneNumber>
          field="Phone Number"
          content={phoneNumber}
        />
        <DataLine<typeof service> field="Service" content={service} />
        <DataLine<typeof stylist> field="Stylist" content={stylist} />
        <DataLine<typeof notes> field="Notes" content={notes} />
      </div>
    </div>
  );
}

export default AppointmentItem;
