import React from "react";
import { sampleAppointments } from "@data";
import { AppointmentsList } from "@components/AppointmentsList";

function Appointments(): JSX.Element {
  return (
    <div id="appointments-page">
      <AppointmentsList appointments={sampleAppointments} />
      <a href="/add-customer">Add Customer</a>
    </div>
  );
}

export default Appointments;
