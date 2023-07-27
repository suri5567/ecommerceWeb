

import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFormData } from '../redux/formSlice';

const Shipping = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');

  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    var formData = {
      name,
      address,
      city,
      zipCode,
      country,
    };

	const nameRegex = /^[a-zA-Z-' ]+$/;
    if (!nameRegex.test(name)) {
      alert("Please enter a valid name (letters and spaces only).");
      return;
    }
	const addressRegex = /^[a-zA-Z0-9-' ]+$/;
    if (!addressRegex.test(address)) {
      alert("Please enter a valid address (letters, numbers, and spaces only).");
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(city)) {
      alert("Please enter a valid city name (letters and spaces only).");
      return;
    }

    if (!/^\d{6}$/.test(zipCode)) {
      alert("Please enter a valid zip code (exactly 6 digits).");
      return;
    }

    if (!/^[\w\s]+$/.test(country)) {
      alert("Please enter a valid country name (letters, numbers, and spaces only).");
      return;
    }

  
    dispatch(setFormData(formData));
    navigate('/payment');
  };

  return (
	<div style={{textAlign:"center"}}>
	<h1 style={{fontSize:"30px", color:"blue", marginBottom:"30px"}}>Please fill the shipping details</h1>
    <form onSubmit={handleFormSubmit} className="w-full max-w-md mx-auto p-4" style={{textAlign:"left"}}>
      <div className="mb-4" >
        <label htmlFor="name" className="block text-gray-700 mb-1">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
		  />
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block text-gray-700 mb-1">
          Address:
        </label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="city" className="block text-gray-700 mb-1">
          City:
        </label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="zipCode" className="block text-gray-700 mb-1">
          Zip Code:
        </label>
        <input
          type="text"
          id="zipCode"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="country" className="block text-gray-700 mb-1">
          Country:
        </label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
		style={{marginRight:"10px"}}>
        Submit
      </button>
    </form>
	</div>
  );
}

export default Shipping;

