import React, { useState } from "react";
import { Props, FormType } from "./types.d";
import "../Form.scss";
import { TimeSlot } from "@components/TimeSlot";

function AppointmentForm({ services, values, onSubmit, openingTime, closingTime }: Props): JSX.Element {
  const today = new Date();
  const [appointment, setAppointment] = useState<FormType>(values);

  const handleChange = (newValue: {
    [field: string]: string | number;
  }): void => {
    setAppointment((appointment) => ({ ...appointment, ...newValue }));
  };

  return (
    <form
      className="form"
      id="appointment"
      onSubmit={() => onSubmit(appointment)}
    >
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
      <div className="form--field-wrapper">
        <TimeSlot
          name="startsAt"
          id="startsAt"
          openingTime={openingTime}
          closingTime={closingTime}
          today={new Date()}
          value={appointment.startsAt}
          availableTimeSlots={[
            { startsAt: today.setHours(17, 0, 0, 0) },
            { startsAt: today.setHours(18, 30, 0, 0) },
          ]}
          onChange={(value) => handleChange({ startsAt: value })}
        />
      </div>
      <input className="primary-button" type="submit" value="Add" />
    </form>
  );
}

export default AppointmentForm;
