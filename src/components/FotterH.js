import React, { useState } from "react";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>About Us</h3>
            <p>
              Your e-commerce website is committed to providing high-quality products and excellent customer service. We aim to make your shopping experience enjoyable and convenient.
            </p>
          </div>
          <div className="col-md-3">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Contact Us</h3>
            <p>Ezhil Nagar, 2nd Street, Thavasiperumal Salai, Muthiahpuram, Thoothukudi-628005, Tamil Nadu, India</p>
            <p>Email: xyz@peralthoughts.in</p>
            <p>Phone: 123-456-7890</p>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>&copy; {new Date().getFullYear()} Your e-commerce website. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: #f9f9f9;
          padding: 40px 0;
        }

        .footer h3 {
          color: #333;
        }

        .footer p {
          color: #777;
        }

        .footer-links li {
          list-style: none;
          margin-bottom: 10px;
        }

        .footer-links a {
          color: #777;
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-links a:hover {
          color: #333;
        }

        .bottom-bar {
          background-color: #333;
          padding: 20px 0;
          color: #fff;
        }

        .bottom-bar p {
          margin-bottom: 0;
        }

        .footer-social {
          list-style: none;
          padding: 0;
          margin: 0;
          text-align: right;
        }

        .footer-social li {
          display: inline-block;
          margin-left: 10px;
        }

        .footer-social a {
          color: #fff;
          text-decoration: none;
          font-size: 20px;
          transition: color 0.3s;
        }

        .footer-social a:hover {
          color: #ccc;
        }
      `}</style>
    </footer>
  );
};

export default Footer;

