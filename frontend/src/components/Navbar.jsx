import React from 'react';
// eslint-disable-next-line
import {Link} from "react-router-dom";
// eslint-disable-next-line

const Navbar = () => {
    // eslint-disable-next-line
    const styles = {
        navbar: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          background: "linear-gradient(135deg, #6a11cb, #2575fc)",
          color: "white",
          fontFamily: "Arial, sans-serif",
        },
        logo: {
          fontSize: "1.5rem",
          fontWeight: "bold",
          textDecoration: "none",
          color: "white",
        },
        navLinks: {
          display: "flex",
          gap: "20px",
        },
        navLink: {
          textDecoration: "none",
          color: "white",
          fontSize: "1rem",
          transition: "color 0.3s ease",
        },
        navLinkHover: {
          color: "#ff6f61",
        },
        profile: {
          display: "flex",
          alignItems: "center",
          gap: "10px",
        },
        profileImage: {
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          objectFit: "cover",
        },
        profileName: {
          fontSize: "1rem",
        },
    };
}

export default Navbar;