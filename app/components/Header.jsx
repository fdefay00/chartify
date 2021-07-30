import React, { useState } from 'react';

export default ({ searchArtist }) => {
  const [searchInput, setSearchInput] = useState('');
  const [region, setRegion] = useState('US');
  const regions = [
    'AD',
    'AR',
    'AT',
    'AU',
    'BE',
    'BG',
    'BO',
    'BR',
    'CH',
    'CL',
    'CO',
    'CR',
    'CY',
    'CZ',
    'DK',
    'DO',
    'EC',
    'EE',
    'ES',
    'FI',
    'FR',
    'GB',
    'GR',
    'GT',
    'HK',
    'HN',
    'HU',
    'IE',
    'IS',
    'IT',
    'LI',
    'LT',
    'LU',
    'LV',
    'MC',
    'MT',
    'MY',
    'NI',
    'NL',
    'NO',
    'NZ',
    'PA',
    'PE',
    'PH',
    'PL',
    'PT',
    'PY',
    'RO',
    'SE',
    'SG',
    'SI',
    'SK',
    'SV',
    'TR',
    'TW',
    'US',
    'UY',
  ];

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(searchInput, region);
    if (searchInput) searchArtist(searchInput, region);
    setSearchInput('');
  };

  return (
    <header className="header">
      <div className="start">
        <h1 className="title"> Chatify </h1>
      </div>
      <div className="middle">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search Artist"
            name="setSearchInput"
            value={searchInput}
            onChange={handleChange}
          />
          {/*
          <select onChange={(e) => setRegion(e.target.value)}>
          <option defaultValue value={region}>
            Region
          </option>
          {regions.map((region) => (
            <option value={region}>{region}</option>
          ))}
          </select>
          */}
        </form>
      </div>
      <div className="end"></div>
    </header>
  );
};
