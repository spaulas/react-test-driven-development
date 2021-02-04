import React from "react";
import { sampleAppointments } from "@data";
import { AppointmentsList } from "@components/AppointmentsList";

function Appointments(): JSX.Element {
  return (
    <div id="appointments">
      <AppointmentsList appointments={sampleAppointments} />
    </div>
  );
}

export default Appointments;
