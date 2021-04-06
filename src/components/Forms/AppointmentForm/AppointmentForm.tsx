import React, { useState } from "react";
import { Props, FormType } from "./types.d";
import "../Form.scss";
import { TimeSlots } from "@components/TimeSlots";

function AppointmentForm({
  services,
  stylists,
  values,
  onSubmit,
  openingTime,
  closingTime,
}: Props): JSX.Element {
  const [appointment, setAppointment] = useState<FormType>(values);
  const [availableStylists, setAvailableStylists] = useState<Props["stylists"]>(
    stylists
  );

  const handleChange = (newValue: {
    [field: string]: string | number | undefined;
  }): void => {
    setAppointment((appointment) => ({
      ...appointment,
      startsAt: undefined,
      ...newValue,
    }));
  };

  const handleServiceChange = (value: string) => {
    handleChange({ service: value, stylist: undefined });
    const newStylistsList = stylists.filter((s) => s.services.includes(value));
    setAvailableStylists(newStylistsList);
  };

  const getStylistTimeSlots = () =>
    stylists.find((s) => s.name === appointment.stylist)?.availableTimeSlots ||
    [];

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
          onChange={(e) => handleServiceChange(e.target.value)}
        >
          <option />
          {services.map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
      </div>

      <div className="form--field-wrapper">
        <label htmlFor="stylist">Stylist</label>
        <select
          disabled={!appointment.service}
          id="stylist"
          value={appointment.stylist}
          name="stylist"
          onChange={(e) => handleChange({ stylist: e.target.value })}
        >
          <option />
          {availableStylists.map((stylist) => (
            <option key={stylist.name}>{stylist.name}</option>
          ))}
        </select>
      </div>
      <div className="form--field-wrapper">
        <TimeSlots
          name="startsAt"
          id="startsAt"
          openingTime={openingTime}
          closingTime={closingTime}
          today={new Date()}
          value={appointment.startsAt}
          availableTimeSlots={getStylistTimeSlots()}
          onChange={(value) => handleChange({ startsAt: value })}
        />
      </div>
      <input className="primary-button" type="submit" value="Add" />
    </form>
  );
}

export default AppointmentForm;
