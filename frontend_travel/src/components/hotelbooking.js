// StaffDetails.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch, FaTimes } from "react-icons/fa";
import Header from "../components/header";
import HotelBookingForm from "./form/HotelBookingForm"; // Import the booking form component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from './hotelbooking/bookingbanner';


function StaffDetails() {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedHotel, setSelectedHotel] = useState(null); // To handle booking modal

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get("http://localhost:8070/hotel/");
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error.message);
            }
        }
        fetchUsers();
    }, []);

    const filteredUsers = users.filter((user) =>
        `${user.hotelname}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        `${user.city}`.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const clearSearch = () => {
        setSearchTerm(""); // Clear the search input
    };


    return (
        <div>
            <Header />
            <div
                style={{
                    minHeight: "100vh",
                    padding: "20px",
                    background: "#f9f9f9",
                }}
            >
                {/* Image Slider Banner */}
                
                <Banner/>

                {/* Search Bar */}
                <div className="search-container" style={{ textAlign: "center", marginTop: "60px" }}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            maxWidth: "400px",
                            margin: "auto",
                        }}
                    >
                        <span
                            style={{
                                padding: "10px",
                                background: "#f0f0f4",
                                border: "1px solid #cccc",
                                borderTopLeftRadius: "40px",
                                borderBottomLeftRadius: "40px",
                            }}
                        >
                            <FaSearch />
                        </span>
                        <input
                            type="text"
                            placeholder="Search by Hotel name or City..."
                            value={searchTerm}
                            onChange={handleSearch}
                            className="form-control"
                            style={{
                                width: "100%",
                                padding: "10px",
                                border: "1px solid #ccc",
                                borderLeft: "none",
                                borderTopRightRadius: "40px",
                                borderBottomRightRadius: "40px",
                            }}
                        />
                        {searchTerm && (
                            <button
                                onClick={clearSearch}
                                style={{
                                    background: "transparent",
                                    border: "none",
                                    cursor: "pointer",
                                    marginLeft: "-35px",
                                    padding: "10px",
                                }}
                            >
                                <FaTimes />
                            </button>
                        )}
                    </div>
                </div>

                {/* Hotel Details */}
                <div
                    className="row row-cols-1 row-cols-md-3"
                    style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between",padding: "90px"  }}
                >
                    {filteredUsers.map((user) => (
                        <div className="col-md-4 mb-3" key={user._id} style={{  padding: "20px"}}>
                            <div
                                className="card"
                                style={{
                                    background: "linear-gradient(135deg, #e0f7fa, #80deea)",
                                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
                                    borderRadius: "20px",
                                    overflow: "hidden",
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                }}
                            >
                                <div
                                    className="card-header"
                                    style={{
                                        backgroundColor: "#00695c",
                                        color: "#fff",
                                        padding: "20px",
                                        textAlign: "center",
                                        fontSize: "20px",
                                        fontWeight: "600",
                                        borderTopLeftRadius: "20px",
                                        borderTopRightRadius: "20px",
                                    }}
                                >
                                    {user.hotelname}
                                </div>
                                <div className="card-body" style={{ padding: "20px", backgroundColor: "#f1f8e9", flexGrow: 1 }}>
                                    <p>
                                        <strong>City:</strong> {user.City}
                                    </p>
                                    <p>
                                        <strong>Address:</strong> {user.Address}
                                    </p>
                                    <p>
                                        <strong>Description:</strong> {user.description}
                                    </p>
                                </div>
                                <div
                                    className="card-footer"
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        padding: "20px 25px",
                                        backgroundColor: "#ffffff",
                                        borderTop: "1px solid #ddd",
                                        borderBottomLeftRadius: "20px",
                                        borderBottomRightRadius: "20px",
                                    }}
                                >
                                    <button
                                        className="btn btn-success"
                                        style={{
                                            borderRadius: "10px",
                                            backgroundColor: "#28a745",
                                            border: "none",
                                            padding: "10px 20px",
                                            color: "#fff",
                                            fontSize: "16px",
                                            cursor: "pointer",
                                            transition: "background-color 0.3s",
                                        }}
                                        onClick={() => setSelectedHotel(user.hotelname)}
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Booking Form Modal */}
                {selectedHotel && (
                    <div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100vw",
                            height: "100vh",
                            background: "rgba(0, 0, 0, 0.5)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{


                                borderRadius: "10px",
                                width: "90%",
                                maxWidth: "950px",
                            }}
                        >
                            <button
                                style={{ float: "right", border: "none", background: "transparent", fontSize: "40px" }}
                                onClick={() => setSelectedHotel(null)}
                            >
                                &times;
                            </button>
                            <HotelBookingForm hotelName={selectedHotel} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default StaffDetails;
