import React, { useEffect, useState } from "react";
import './Profile.css'

const Profile = () => {
  const [userDetails, setUserDetails] = useState({});

  const loadUserDetails = async () => {
   try {
    const userCredentials = await JSON.parse(
        localStorage.getItem("userCredentials")
      );
      const userId = userCredentials.id;
      const userDataRes = await fetch(`https://dummyjson.com/users/${userId}`);
      const userData = await userDataRes.json();
      setUserDetails(userData);
      console.log(userDetails);
   } catch (error) {
     console.log(error);
   }
  };

  useEffect(() => {
    loadUserDetails();
  },[]);

  return (
    <div id="profile">
      <div id="image">
        <img src={userDetails.image} alt="profile-image"></img>
      </div>
      <div>
        <h2>Basic Details</h2>

        <div className="card">
        <p><b>First Name</b>: {userDetails.firstName} </p>
        <p><b>Last Name:</b> {userDetails.lastName} </p>
        <p><b>Maiden Name:</b> {userDetails.maidenName} </p>
        <p><b>Date of Birth:</b> {userDetails.birthDate} </p>
        <p><b>Age : </b>{userDetails.age} </p>
        <p><b>Gender:</b> {userDetails.gender} </p>
        <p><b>Email:</b> {userDetails.email} </p>
        <p><b>Phone:</b> {userDetails.password} </p>
        <p><b>username: </b> {userDetails.username} </p>

        <p>Blood Group: {userDetails.bloodGroup} </p>
        <p>Height: {userDetails.height} </p>
        <p>Weight: {userDetails.weight} </p>
        <p>Eye Color: {userDetails.eyeColor} </p>
        <p>Hair - Type : {userDetails.hair.type}, Color: {userDetails.hair.color} </p>
        <p>University: {userDetails.university} </p>

        <p>Address - </p>
        <p>Address: {userDetails.address.address} </p>
        <p>City: {userDetails.address.city} </p>
        <p>
          Coordinates: Lat - {userDetails.address.coordinates.lat}, Long -{" "}
          {userDetails.address.coordinates.long}{" "}
        </p>
        <p>Postal Code : {userDetails.address.postalCode} </p>
        <p>State: {userDetails.address.state} </p>
        </div>
      </div>

      <div>
        <h2>Bank Details</h2>
        <p>Card Expire: {userDetails.bank.cardExpire} </p>
        <p>Card Number: {userDetails.bank.cardNumber} </p>
        <p>Card Type: {userDetails.bank.cardType} </p>
        <p>Currency: {userDetails.bank.currency} </p>
        <p>IBAN : {userDetails.bank.iban} </p>
      </div>

      <div>
        <h2>Company Details</h2>
        <p>Name: {userDetails.company.name} </p>
        <p>Title {userDetails.company.title} </p>
        <p>Department: {userDetails.company.department} </p>

        <p>Address - </p>
        <p>Address: {userDetails.company.address.address} </p>
        <p>City: {userDetails.company.address.city} </p>
        <p>
          Coordinates: Lat - {userDetails.company.address.coordinates.lat}, Long
          - {userDetails.company.address.coordinates.long}{" "}
        </p>
        <p>Postal Code : {userDetails.company.address.postalCode} </p>
        <p>State: {userDetails.company.address.state} </p>
      </div>

      <div>
        <h2>Other Details</h2>
        <p>Domain: {userDetails.domain} </p>
        <p>IP: {userDetails.ip} </p>
        <p>MacAddress: {userDetails.macAddress} </p>
        <p>EIN: {userDetails.ein} </p>
        <p>SSN: {userDetails.ssn} </p>
        <p>User Agent: {userDetails.userAgent} </p>
      </div>
    </div>
  );
};

export default Profile;
