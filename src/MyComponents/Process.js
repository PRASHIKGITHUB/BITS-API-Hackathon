import React, { useState,useEffect } from 'react';
import './Process.css';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { Timestamp } from 'firebase/firestore';

const Process = () => {

  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [phone,setPhone]=useState();
  const [address,setAddress]=useState();
  const [experience,setExperience]=useState();
  const [type,setType]=useState();
  const [reason,setReason]=useState();

  const navigate=useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    const info={
      name,email,phone,address,experience,type,reason,
      createdAt:String(Timestamp.now().toDate())
    }
    console.log(info);
    db.collection('Applications').add(info)
    .then(()=>{
      navigate('/');
    }).catch(error=>console.log(error));
  }

  return (
    <div className="adoption-process">
      <div className="adoption-process-content">
        <h1 className="adoption-process-title">Adoption Process</h1>
        <p className="adoption-process-description">
          Welcome to our adoption process page! Here, we'll explain the steps you need to follow to adopt a pet from our shelter.
        </p>
        <h2 className="adoption-process-subtitle">Steps to Adopt a Pet</h2>
        <ol className="adoption-process-steps">
          <li>Visit our shelter and explore the available pets.</li>
          <li>Choose the pet you'd like to adopt.</li>
          <li>Fill out an adoption application form.</li>
          <li>Meet with our adoption counselor to discuss your application.</li>
          <li>Complete the adoption paperwork and pay the adoption fee.</li>
          <li>Take your new furry friend home!</li>
        </ol>
        <p className="adoption-process-contact">
          Our team is here to assist you throughout the entire process. If you have any questions or need assistance, please don't hesitate to contact us.
        </p>

        {/* Pet Adoption Application Form */}
        <h2 className="adoption-form-title">Pet Adoption Application Form</h2>
        <div className="container">
          <form action="#">
            <div className="user-input-box">
              <label htmlFor="applicantName">Your Full Name</label>
              <input
                type="text"
                id="applicantName"
                name="applicantName"
                placeholder="Enter Your Full Name"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter Your Phone Number"
                value={phone}
                onChange={(e)=>{setPhone(e.target.value)}}
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter Your Address"
                value={address}
                onChange={(e)=>{setAddress(e.target.value)}}
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="experience">Pet Ownership Experience</label>
              <input
                type="text"
                id="experience"
                name="experience"
                placeholder="Describe your previous pet ownership experience"
                value={experience}
                onChange={(e)=>{setExperience(e.target.value)}}
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="petPreference">Preferred Pet Type</label>
              <input
                type="text"
                id="petPreference"
                name="petPreference"
                placeholder="Specify the type of pet you are interested in"
                value={type}
                onChange={(e)=>{setType(e.target.value)}}
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="reason">Reason for Adoption</label>
              <textarea
                id="reason"
                name="reason"
                placeholder="Tell us why you want to adopt a pet"
                value={reason}
                onChange={(e)=>{setReason(e.target.value)}}
              />
            </div>

            <div className="form-submit-btn">
              <input type="submit" value="Submit Application"  onClick={handleSubmit}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Process;
