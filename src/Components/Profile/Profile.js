import React, { useEffect, useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [userDetails, setUserDetails] = useState({});

  const loadUserDetails = async () => {
    try {
      const userCredentials = await JSON.parse(
        localStorage.getItem("userCredentials")
      );

      if (!userCredentials || !userCredentials.token) {
        alert("Please login!!");
        window.location.href = "./";
      }
      const userId = userCredentials.id;
      const userDataRes = await fetch(`https://dummyjson.com/users/${userId}`);
      const userData = await userDataRes.json();
      setUserDetails(userData);
      console.log(userDetails);
      localStorage.setItem("userDetails", JSON.stringify(userData));
    } catch (error) {
      console.log(error);
      return;
    }
  };

  useEffect(() => {
    loadUserDetails();
  }, []);

  return (
    <div>
      {Object.keys(userDetails).length > 0 && (
        <div id="profile">
          <h1>Welcome to Profile Page!!</h1>
          <div id="image">
            <img src={userDetails.image} alt="profile-image"></img>
          </div>
          <div className="card">
            <h2>Basic Details</h2>

            <div className="card-content">
              <p>
                <b>First Name</b>: {userDetails.firstName}{" "}
              </p>
              <p>
                <b>Last Name:</b> {userDetails.lastName}{" "}
              </p>
              <p>
                <b>Maiden Name:</b> {userDetails.maidenName}{" "}
              </p>
              <p>
                <b>Date of Birth:</b> {userDetails.birthDate}{" "}
              </p>
              <p>
                <b>Age : </b>
                {userDetails.age}{" "}
              </p>
              <p>
                <b>Gender:</b> {userDetails.gender}{" "}
              </p>
              <p>
                <b>Email:</b> {userDetails.email}{" "}
              </p>
              <p>
                <b>Phone:</b> {userDetails.password}{" "}
              </p>
              <p>
                <b>username: </b> {userDetails.username}{" "}
              </p>

              <p>
                <b>Blood Group:</b> {userDetails.bloodGroup}{" "}
              </p>
              <p>
                <b>Height:</b> {userDetails.height}{" "}
              </p>
              <p>
                <b>Weight:</b> {userDetails.weight}{" "}
              </p>
              <p>
                <b>Eye Color:</b> {userDetails.eyeColor}{" "}
              </p>
              <p>
                <b>Hair -</b> Type :{userDetails.hair.type}, Color:{" "}
                {userDetails.hair.color}{" "}
              </p>
              <p>
                <b>University: </b>
                {userDetails.university}{" "}
              </p>

              <br></br>
              <div>
                <h4>Address - </h4>
                <p>
                  <b>Address: </b>
                  {userDetails.address.address}{" "}
                </p>
                <p>
                  <b>City:</b> {userDetails.address.city}{" "}
                </p>
                <p>
                  <b> Coordinates: </b> Lat -{" "}
                  {userDetails.address.coordinates.lat}, Long -{" "}
                  {userDetails.address.coordinates.long}{" "}
                </p>
                <p>
                  <b>Postal Code:</b> {userDetails.address.postalCode}{" "}
                </p>
                <p>
                  <b>State:</b> {userDetails.address.state}{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <h2>Bank Details</h2>
            <div className="card-content">
              <p>
                <b>Card Expire: </b> {userDetails.bank.cardExpire}{" "}
              </p>
              <p>
                <b>Card Number:</b> {userDetails.bank.cardNumber}{" "}
              </p>
              <p>
                <b>Card Type:</b> {userDetails.bank.cardType}{" "}
              </p>
              <p>
                <b>Currency:</b> {userDetails.bank.currency}{" "}
              </p>
              <p>
                <b>IBAN:</b> {userDetails.bank.iban}{" "}
              </p>
            </div>
          </div>

          <div className="card">
            <h2>Company Details</h2>
            <div className="card-content">
              <p>
                <b>Name:</b> {userDetails.company.name}{" "}
              </p>
              <p>
                <b>Title:</b> {userDetails.company.title}{" "}
              </p>
              <p>
                <b>Department:</b> {userDetails.company.department}{" "}
              </p>

              <br></br>
              <div>
                <h4>Address - </h4>
                <p>
                  <b>Address:</b> {userDetails.company.address.address}{" "}
                </p>
                <p>
                  <b>City:</b> {userDetails.company.address.city}{" "}
                </p>
                <p>
                  <b>Coordinates:</b> Lat -{" "}
                  {userDetails.company.address.coordinates.lat}, Long -{" "}
                  {userDetails.company.address.coordinates.long}{" "}
                </p>
                <p>
                  <b>Postal Code:</b> {userDetails.company.address.postalCode}{" "}
                </p>
                <p>
                  <b>State:</b> {userDetails.company.address.state}{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <h2>Other Details</h2>
            <div className="card-content">
              <p>
                <b>Domain:</b> {userDetails.domain}{" "}
              </p>
              <p>
                <b>IP:</b> {userDetails.ip}{" "}
              </p>
              <p>
                <b>MacAddress:</b> {userDetails.macAddress}{" "}
              </p>
              <p>
                <b>EIN:</b> {userDetails.ein}{" "}
              </p>
              <p>
                <b>SSN:</b> {userDetails.ssn}{" "}
              </p>
              <br></br>
              <p>
                <b>User Agent:</b> {userDetails.userAgent}{" "}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
