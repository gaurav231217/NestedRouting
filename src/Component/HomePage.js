import React from "react";
import "./assest/style.css";

function HomePage() {
  return (
    <div className="homepage-container">
      <h1>Welcome to Our Application</h1>
      <p className="homepage-subtext">
        This is a sample homepage built with React. You can navigate through tabs
        to explore different features like OTP generation, form submissions,
        user profiles, and more.
      </p>
      <button className="homepage-button" onClick={() => alert("Explore clicked!")}>
        Explore Now
      </button>
    </div>
  );
}

export default HomePage;
