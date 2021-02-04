import React from "react";
import { Props } from "./types.d";

function CustomerForm({ firstName }: Props): JSX.Element {
  return (
    <form id="customer">
      <label htmlFor="firstName">First Name</label>
      <input id="firstName" type="text" name="firstName" value={firstName} readOnly />
    </form>
  );
}

export default CustomerForm;
