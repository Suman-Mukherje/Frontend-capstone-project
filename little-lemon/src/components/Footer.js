import React from "react";

const Footer = () => {
  return (
    <>
      <section class="footer">
        <div class="share">
          <a href="https://www.facebook.com/" class="fab fa-facebook-f">f</a>
          <a href="https://twitter.com/?lang=en" class="fab fa-twitter">t</a>
          <a href="https://www.instagram.com/" class="fab fa-instagram">i</a>
          <a href="https://www.linkedin.com/" class="fab fa-linkedin">in</a>
          <a href="https://in.pinterest.com/" class="fab fa-pinterest">p</a>
        </div>
        <div class="links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#review">Review</a>
          <a href="#contact">Reservation</a>
          <a href="#blogs">Blogs</a>
        </div>
        <div class="credit">
          created by <span>Suman Mukherjee</span> | all rights reserved
        </div>
      </section>
    </>
  );
};

export default Footer;
