import React from "react";
import { Props } from "./types.d";
import { timeIncrements } from "@utils/timeFunctions";

function TimeSlot({
  id,
  value,
  name,
  onChange,
  today,
  openingTime,
  closingTime,
  availableTimeSlots,
}: Props): JSX.Element {
  const mergeDateAndTime = (date: number, timeSlot: number) => {
    const time = new Date(timeSlot);
    return new Date(date).setHours(time.getHours(), time.getMinutes(), 0, 0);
  };

  // calculate the list of daily time slots
  const totalSlots = (closingTime - openingTime) * 2;
  const startTime = new Date().setHours(openingTime, 0, 0, 0);
  const timeIncrement = 30 * 60 * 1000;
  const timeSlots = timeIncrements(totalSlots, startTime, timeIncrement);

  // turns value into a string hh:mm
  const toTimeValue = (timeStamp: number) =>
    new Date(timeStamp).toTimeString().substring(0, 5);

  // calculate the next 7 days
  const midnight = new Date(today).setHours(0, 0, 0, 0);
  const dayIncrement = 24 * 60 * 60 * 1000;
  const daySlots = timeIncrements(7, midnight, dayIncrement);

  const toDateValue = (dateStamp: number) => {
    const [day, , dayOfMonth] = new Date(dateStamp).toDateString().split(" ");
    return `${day} ${dayOfMonth}`;
  };

  // returns a radio button if the time slot is available
  const getRadioButtonIfAvailable = (date: number, timeSlot: number) => {
    const startsAt = mergeDateAndTime(date, timeSlot);
    if (
      // eslint-disable-next-line react/prop-types
      availableTimeSlots.some(
        (availableTimeSlot) => availableTimeSlot.startsAt === startsAt
      )
    ) {
      return (
        <input name={name} type="radio" value={startsAt} checked={startsAt === value} onChange={() => onChange(startsAt)} />
      );
    }
    return null;
  };

  return (
    <table id={id}>
      <thead>
        <tr>
          <th />
          {daySlots.map((daySlot: number) => (
            <th key={daySlot}>{toDateValue(daySlot)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {timeSlots.map((timeSlot: number) => {
          const timeValue = toTimeValue(timeSlot);
          return (
            <tr key={timeSlot}>
              <td>{timeValue}</td>
              {daySlots.map((date) => (
                <td key={`${date}_${timeValue}`}>
                  {getRadioButtonIfAvailable(date, timeSlot)}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TimeSlot;
