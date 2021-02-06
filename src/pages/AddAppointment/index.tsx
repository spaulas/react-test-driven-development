import React from "react";
import { AppointmentForm } from "@components/Forms/AppointmentForm";
import "./AddAppointment.scss";

function AddAppointment(): JSX.Element {
  const handleSubmit = () => console.log("submit");
  const values = {};
  return (
    <div id="add-customer-page" className="add-customer-page">
      <span className="add-customer-page--title">Add a new Appointment</span>
      <AppointmentForm
        services={[
          "Haircut",
          "Blow-Dry",
          "Haircut & Color",
          "Beard Trim",
          "Haircut & Beard Trim",
          "Extensions",
        ]}
        onSubmit={handleSubmit}
        values={values}
      />
    </div>
  );
}

export default AddAppointment;
