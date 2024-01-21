'use client';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [exploreClicked, setExploreClicked] = useState(false);

  const handleExploreClick = () => {
    setExploreClicked(true);
  };

  return (
    <main style={{ backgroundImage: "url('3644996.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Navbar />
      <div style={{ height: "92vh", width: "100vw", position: 'relative' }}>
        <div style={{ position: 'absolute', left: '7%', top: '17%', color: 'black', textAlign: 'left' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', fontFamily: "'Kotta One', sans-serif" }}>PROJECT<br/> MATCHMAKER -</h1>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', fontFamily: "'Kotta One', sans-serif"}}>Explore Your Digital <br/> Horizon</h1>
        </div>
        <div style={{
          position: 'absolute',
          right: '13%',
          top: '17%',
          padding: '40px',
          background: 'rgba(255, 255, 255, 0.4)',
          borderRadius: '73px',
          // backdropFilter: 'blur(10px)',
          width: '450px',
          height: '425px',
          textAlign: 'left',
          border: '2px solid black'
        }}>
          <div style={{
            padding: '25px',
            background: 'rgba(214, 211, 211, 0.4)',
            borderRadius: '50px',
            backdropFilter: 'blur(10px)',
            width: '340px',
            height: '280px',
            marginBottom: '30px'
          }}
          >
            <p style={{ fontSize: '1.5rem',fontFamily: "'Julius Sans One', sans-serif" }}>Discover, contribute, and learn. Your gateway to trending projects. Explore, connect, and code with our curated suggestions today!</p>
          </div>
          <Link href="/searchpage" onClick={handleExploreClick} style={{
            padding: '20px',
            background: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '5px',
            border: 'none',
            color: 'white',
            marginLeft: '35px',
            cursor: 'pointer',
            fontFamily: "'Julius Sans One', sans-serif",
          }}>
          Explore
            <button
              onClick={handleExploreClick}
              style={{
                transition: 'transform 2.5s ease-in-out', // Adjusted transition duration to 1s
                transform: exploreClicked ? 'translateX(50px)' : 'translateX(0)', // Move the button forward on click
              }}
            >
             --->
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
