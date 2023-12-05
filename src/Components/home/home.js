import React from 'react';

function Home() {
  const containerStyle = {
    backgroundImage: 'url("/assets/images/02.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', // Adjust as needed to cover the entire viewport height
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white', 
  };

  return (
    <div style={containerStyle}>
      <h1 className='mainh1'>
        Chocolate Bliss Awaits Login!
      </h1>
      <hr className='mainhr'></hr>
      <ul className='listUnderHeader'>
        <li>Home</li>
        <li>Login</li>
      </ul>
    </div>
  );
}

export default Home;
