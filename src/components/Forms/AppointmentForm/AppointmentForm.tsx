import React, { useState } from "react";
import { Props, FormType } from "./types.d";
import "../Form.scss";

function AppointmentForm({ services, values, onSubmit }: Props): JSX.Element {
  const [appointment, setAppointment] = useState<FormType>(values);

  const handleChange = (newValue: {
    [field: string]: string | number;
  }): void => {
    setAppointment((appointment) => ({ ...appointment, ...newValue }));
  };

  return (
    <form className="form" id="appointment" onSubmit={() => onSubmit(appointment)}>
      <div className="form--field-wrapper">
        <label htmlFor="service">Service</label>
        <select
          id="service"
          value={appointment.service}
          name="service"
          onChange={(e) => handleChange({ service: e.target.value })}
        >
          <option />
          {services.map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
      </div>
      <input className="primary-button" type="submit" value="Add" />
    </form>
  );
}

export default AppointmentForm;
