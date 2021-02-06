import React from "react";
import { CustomerForm } from "@components/Forms/CustomerForm";
import "./AddCustomer.scss";

function AddCustomer(): JSX.Element {
  const handleSubmit = () => console.log("submit");
  const values = {};
  return (
    <div id="add-customer-page" className="add-customer-page">
      <span className="add-customer-page--title">Add a new Customer</span>
      <CustomerForm onSubmit={handleSubmit} values={values} />
    </div>
  );
}

export default AddCustomer;
