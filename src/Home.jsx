// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";

function Home() {
  const customers = [
    { id: 1, name: "John Doe", age: 30, location: "New York", active: true },
    {
      id: 2,
      name: "Jane Smith",
      age: 25,
      location: "Los Angeles",
      active: false,
    },
    {
      id: 3,
      name: "Michael Johnson",
      age: 35,
      location: "Chicago",
      active: true,
    },
    // Add more customers as needed
  ];

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>300</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>DIVISIONS</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>12</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>{customers.length}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>NOTIFICATIONS</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>42</h1>
        </div>
      </div>

      <div className="customer-list">
        {customers.map((customer) => (
          <div key={customer.id} className="customer-card">
            <h4>Name: {customer.name}</h4>
            <div className="customer-details">
              <p>Age: {customer.age}</p>
              <p>Location: {customer.location}</p>
              <p>Active: {customer.active ? "Yes" : "No"}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;
