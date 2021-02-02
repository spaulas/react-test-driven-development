import React, { useState } from "react";
import { Props } from "./types.d";
import { AppointmentItem } from "../AppointmentItem";

function AppointmentsList({ appointments }: Props): JSX.Element {

  const [selectedAppointment, setSelectAppointment] = useState<number>(0)

  const getTimeStamp = (time: number): string => {
    const [h, m] = new Date(time).toTimeString().split(":");
    return `${h}:${m}`;
  };
  

  return (
    <div id="appointmentsList">
      <ol>
        {appointments.map((appointment, i) => (
          <li key={appointment.startsAt}>
            <button type="button" onClick={()=>setSelectAppointment(i)}>{getTimeStamp(appointment.startsAt)}</button>
          </li>
        ))}
      </ol>
      {appointments.length === 0 ? (
        <p>There are no appointments scheduled for today</p>
      ) : (
        <AppointmentItem customer={appointments[selectedAppointment].customer} />
      )}
    </div>
  );
}

export default AppointmentsList;
