import React from "react";
import logo from "../assets/himg.png";

function Header() {
    return (
        <nav class="navbar navbar-expand-lg" style={{ backgroundColor: 'rgba(169, 169, 169, 0.4)' }}> {/* Transparent gray */}
            <div class="container-fluid">
                <nav class="navbar" >
                    <div class="container-fluid" style={{ height: '100px' }}>
                        <a class="navbar-brand" href=" " style={{ fontSize: '24px' }}>
                            <img src={logo} alt="Logo" width="100" height="100" style={{ padding: '10px' }} />
                            TravelSriLanka
                        </a>
                    </div>
                </nav>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav" style={{ fontSize: '18px', marginLeft: '30px' }}>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/destination">Destinations</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href=" ">Gallery</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href=" ">Bookings</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href=" ">Explore Sri Lanka</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
