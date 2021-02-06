import React, { useState } from "react";
import { Props, FormType } from "./types.d";
import "../Form.scss";

function CustomerForm({ values, onSubmit }: Props): JSX.Element {
  const [customer, setCustomer] = useState<FormType>(values);

  const handleChange = (newValue: {
    [field: string]: string | number;
  }): void => {
    setCustomer((customer) => ({ ...customer, ...newValue }));
  };

  return (
    <form id="customer" className="form" onSubmit={() => onSubmit(customer)}>
      <div className="form--field-wrapper">
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={customer.firstName}
          onChange={(e) => handleChange({ firstName: e.target.value })}
        />
      </div>

      <div className="form--field-wrapper">
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={customer.lastName}
          onChange={(e) => handleChange({ lastName: e.target.value })}
        />
      </div>

      <div className="form--field-wrapper">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          id="phoneNumber"
          type="number"
          name="phoneNumber"
          value={customer.phoneNumber}
          onChange={(e) =>
            handleChange({ phoneNumber: parseInt(e.target.value, 10) })
          }
        />
      </div>
      <input className="primary-button" type="submit" value="Add" />
    </form>
  );
}

export default CustomerForm;
