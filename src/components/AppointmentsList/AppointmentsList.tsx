import React, { useState } from "react";
import { Props } from "./types.d";
import { AppointmentItem } from "@components/AppointmentItem";
import { getTimeStamp } from "@utils/convertFunctions";
import "./AppointmentsList.scss";

function AppointmentsList({ appointments }: Props): JSX.Element {
  const [selectedAppointment, setSelectAppointment] = useState<number>(0);

  return (
    <div id="appointments-list" className="appointments-list">
      <ol className="appointments-list--time-list">
        {appointments.map((appointment, i) => (
          <li key={appointment.startsAt}>
            <button
              className="appointments-list--time-button"
              type="button"
              onClick={() => setSelectAppointment(i)}
            >
              <div />
              <span>{getTimeStamp(appointment.startsAt)}</span>
            </button>
          </li>
        ))}
      </ol>
      {appointments.length === 0 ? (
        <p className="appointments-list--empty">
          There are no appointments scheduled for today
        </p>
      ) : (
        <AppointmentItem
          extraClass="appointments-list--item"
          timeStamp={getTimeStamp(appointments[selectedAppointment].startsAt)}
          customer={appointments[selectedAppointment].customer}
        />
      )}
    </div>
  );
}

export default AppointmentsList;
