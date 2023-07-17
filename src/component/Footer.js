import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>All right reserve &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#f4f4f4',
  padding: '10px',
  textAlign: 'center',
  position: 'absolute',
  bottom: '0',
  width: '100%',
};

export default Footer;