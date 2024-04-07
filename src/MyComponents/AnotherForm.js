import React, { useState } from 'react';
import './Process.css';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { Timestamp } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const Process = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [experience, setExperience] = useState('');
  const [type, setType] = useState('');
  const [reason, setReason] = useState('');
  const [image, setImage] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const info = {
      name,
      email,
      phone,
      address,
      experience,
      type,
      reason,
      createdAt: String(Timestamp.now().toDate()),
    };

    // Send 'info' to your backend or storage service.
    // Make sure to include the 'image' in your data submission as needed.

    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...info, image }),
      });

      if (response.ok) {
        navigate('/');
      } else {
        console.error('Error submitting the form.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div className="adoption-process">
      <div className="adoption-process-content">
        <h1 className="adoption-process-title">Add a Pet</h1>
        <p className="adoption-process-description">
          Welcome to our add a pet page!
        </p>
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
              
            <div className="user-input-box">
              <label htmlFor="experience">Pet Type</label>
              <input
                type="text"
                id="experience"
                name="experience"
                placeholder="Describe the Pet"
                value={experience}
                onChange={(e)=>{setExperience(e.target.value)}}
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="experience">Pet Name </label>
              <input
                type="text"
                id="experience"
                name="experience"
                placeholder="Pet Name "
                value={experience}
                onChange={(e)=>{setExperience(e.target.value)}}
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="experience">Breed </label>
              <input
                type="text"
                id="experience"
                name="experience"
                placeholder="Breed "
                value={experience}
                onChange={(e)=>{setExperience(e.target.value)}}
              />
            </div>
            <div className="user-input-box">
              <label htmlFor="experience">Age </label>
              <input
                type="text"
                id="experience"
                name="experience"
                placeholder="Age "
                value={experience}
                onChange={(e)=>{setExperience(e.target.value)}}
              />
            </div>
        <div className="user-input-box">
          <label htmlFor="petImage">Upload Pet Image</label>
          <input
            type="file"
            id="petImage"
            name="petImage"
            accept="image/*" // Limit file selection to image files
            onChange={handleImageChange}
          />
        </div>
        <div className="form-submit-btn">
          <input type="submit" value="Submit Application" onClick={handleSubmit} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Process;
