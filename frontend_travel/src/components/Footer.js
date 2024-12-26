import React from "react";
import logo from "../assets/himg.png";

function Footer() {
    return (
        <div className="container-fluid" 
             style={{ backgroundColor: '#b39183', color: '#343a40', padding: '40px 0' }}>
            <div className="row justify-content-center">
                {/* Logo Section */}
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <img 
                        src={logo}
                        alt="Logo" 
                        style={{ maxWidth: '150px' }} 
                    />
                </div>

                {/* Footer Topics */}
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                        <h3 className="card-title" style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
                            ස්තූතියි නැවත එන්න.
                        </h3>
                        <h5 className="card-title" style={{ fontSize: '1.5rem' }}>
                            Thanks, come back.
                        </h5>
                        <h5 className="card-title" style={{ fontSize: '1.5rem' }}>
                            நன்றி திரும்பி வா.
                        </h5>
                        
                    <h5 style={{ fontWeight: 'bold', marginTop : '50px'}}>Quick Links</h5>
                    <div className="footer-links">
                        <a href="/about" className="text-dark" style={{ display: 'block', margin: '10px 0', fontSize: '1.1rem' }}>About Us</a>
                        <a href="/contact" className="text-dark" style={{ display: 'block', margin: '10px 0', fontSize: '1.1rem' }}>Contact</a>
                        <a href="/privacy" className="text-dark" style={{ display: 'block', margin: '10px 0', fontSize: '1.1rem' }}>Privacy Policy</a>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="col-12 col-sm-6 col-md-3 text-center mb-4">
                    <h5 style={{ fontWeight: 'bold' }}>Follow Us</h5>
                    <div className="social-icons">
                        <a href="https://facebook.com" className="text-dark" style={{ margin: '0 10px', fontSize: '1.5rem' }}>
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com" className="text-dark" style={{ margin: '0 10px', fontSize: '1.5rem' }}>
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://instagram.com" className="text-dark" style={{ margin: '0 10px', fontSize: '1.5rem' }}>
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

                {/* Footer Text Section */}
                <div className="col-12 text-center mt-4">
                    <p className="card-text" style={{ fontSize: '1.1rem' }}>
                        Thank you for visiting! We hope to see you again soon.
                    </p>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="row justify-content-center mt-4" style={{ borderTop: '1px solid #343a40', paddingTop: '10px' }}>
                <div className="col-12 text-center">
                    <p style={{ fontSize: '0.9rem', color: '#804831' }}>
                        &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
