'use client';
import React, { useState, ChangeEvent ,useEffect} from 'react';
import axios from 'axios';
import './custom.css';

const Page = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState({});
  const [isFocused, setIsFocused] = useState(false);
  useEffect(() => {
    if (query) {
      fetch(`http://127.0.0.1:8000/api/projects/${query}`)
        .then((response) => {
          setResponse({response});
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [query]);

  const handleFocus = () => {
    setIsFocused(true);
  };


  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  function handleSubmit () {
    console.log(response);
  };

  const quickQueries = ['AI for HealthCare', 'Encryption Project', 'Gen AI with Llama Project', 'Amazon clone', 'Management System'];

  // Updated quick query button click handler
  const handleQuickQueryClick = (quickQuery: string) => {
    setQuery(quickQuery);
  };

  return (
    <main style={{ backgroundImage: "url('back.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', position: 'relative' }}>
      {/* Semi-transparent white overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(255, 255, 255, 0.5)', // Adjust the alpha value for transparency
        backdropFilter: 'blur(3px)', // Apply blur effect
      }} />

      {/* Home Button */}
      <a href={'/'} style={{ position: 'absolute', top: '35px', right: '65px', color: 'black', textDecoration: 'none', fontSize: '25px' }}>
        Home
      </a>

      {/* Search Input */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'black' }}>
        {/* Search Input */}
        <input
          type="text"
          placeholder="Type to Search"
          value={query}
          onChange={handleInputChange}
          onFocus={handleFocus}
          style={{
            padding: '20px', // Increased padding
            fontSize: !isFocused?'100px':'50px', // Increased font size
            top: !isFocused?'30%':'35%',
            left: '30%',
            position: 'absolute',
            border: 'none',
            background: 'transparent', // Transparent background
            outline: 'none',
            color: 'black', // Text color
            overflowY: 'auto',
            width: '750px',
            maxHeight: '200px',
          }}
          className="custom-input"
        />

        {/* Two vertical lines */}
        <div style={{
          position: 'absolute',
          top: 'calc(30% + 60px)', // Adjust position below input
          left: 'calc(28% - 25px)', // Centered
          width: '2px', // Adjust line width
          height: '50px', // Adjust line height
          background: 'black',
        }} />
        <div style={{
          position: 'absolute',
          top: 'calc(30% + 60px)', // Adjust position below input
          left: 'calc(28% + 20px)', // Adjust space between lines
          width: '4px', // Adjust line width
          height: '80px', // Adjust line height
          background: 'black',
        }} />
        {/* Quick query buttons */}
        <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
          {quickQueries.map((quickQuery, index) => (
            <button
              key={index}
              onClick={() => handleQuickQueryClick(quickQuery)} // Updated onClick handler
              style={{
                padding: '10px',
                fontSize: '16px',
                backgroundColor: 'black',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '5px',
                zIndex: '50000',
              }}
            >
              {quickQuery}
            </button>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          style={{
            marginTop: '20px', // Adjusted margin from the input field
            position: 'absolute',
            top: '35%',
            left: '70%',
            padding: '15px',
            fontSize: '18px',
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            zIndex: '10000',
            borderRadius: '15%',
            width: '100px',
          }}
        >
          Submit
        </button>
      </div>
    </main>
  );
};

export default Page;
