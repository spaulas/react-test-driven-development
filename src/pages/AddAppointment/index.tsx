import React from "react";
import { AppointmentForm } from "@components/Forms/AppointmentForm";
import "./AddAppointment.scss";
import { sampleServices, sampleStylists, openingTime, closingTime } from "@data";

function AddAppointment(): JSX.Element {
  const handleSubmit = () => console.log("submit");
  const values = {};
  return (
    <div id="add-customer-page" className="add-customer-page">
      <span className="add-customer-page--title">Add a new Appointment</span>
      <AppointmentForm
        services={sampleServices}
        stylists={sampleStylists}
        onSubmit={handleSubmit}
        values={values}
        openingTime={openingTime}
        closingTime={closingTime}
      />
    </div>
  );
}

export default AddAppointment;
