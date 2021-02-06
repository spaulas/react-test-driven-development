import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

function Home(): JSX.Element {
  return (
    <div id="home-page" className="home-page">
      <Link to="/appointments" className="primary-button" >Appointments</Link>
      <Link to="/add-customer" className="primary-button">Add Customer</Link>
      <Link to="/add-appointment" className="primary-button">Add Appointment</Link>
    </div>
  );
}

export default Home;
