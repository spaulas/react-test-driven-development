import React, { useState } from "react";
import { Props, FormType } from "./types.d";

function CustomerForm({ values, onSubmit }: Props): JSX.Element {
  const [customer, setCustomer] = useState<FormType>(values);

  const handleChange = (newValue: { [field: string]: string | number }): void => {
    setCustomer((customer) => ({ ...customer, ...newValue }));
  };

  return (
    <form id="customer" onSubmit={() => onSubmit(customer)}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        type="text"
        name="firstName"
        value={customer.firstName}
        readOnly
        onChange={(e) => handleChange({ firstName: e.target.value })}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        type="text"
        name="lastName"
        value={customer.lastName}
        readOnly
        onChange={(e) => handleChange({ lastName: e.target.value })}
      />
      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        id="phoneNumber"
        type="number"
        name="phoneNumber"
        value={customer.phoneNumber}
        readOnly
        onChange={(e) => handleChange({ phoneNumber: parseInt(e.target.value, 10) })}
      />
    </form>
  );
}

export default CustomerForm;
