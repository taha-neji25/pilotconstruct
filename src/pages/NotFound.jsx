// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.text}>
        Oops! The page you are looking for does not exist.
      </p>
      <p style={styles.text}>
        You can go back to the <Link to="/" style={styles.link}>home page</Link>.
      </p>
    </div>
  );
};

// Basic inline styles (you can replace with CSS or a styling library)
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Full viewport height
    textAlign: 'center',
    backgroundColor: '#f8f9fa', // Light background color
    color: '#333', // Dark text color
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
  },
  link: {
    color: '#007bff', // Blue link color
    textDecoration: 'none',
  },
};

export default NotFound;