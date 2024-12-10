import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import { FaSearch, FaTimes } from 'react-icons/fa';
import Header from '../components/header';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import h1 from "../assets/h1.jpg";
import h2 from "../assets/h2.jpg";
import h3 from "../assets/h3.jpg";

function StaffDetails() {
    const [users, setUsers] = useState([]);
    const [setModelState] = useState(false);
    const [setSelectedUser] = useState({});
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get("http://localhost:8070/hotel/");
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error.message);
            }
        }
        fetchUsers();
    }, []);

    const filteredUsers = users.filter(user =>
        `${user.hotelname}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        `${user.city}`.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleModelOpen = (user) => {
        setSelectedUser(user);
        setModelState(true);
    };

    const clearSearch = () => {
        setSearchTerm(""); // Clear the search input
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true
    };

    return (
        <div>
            <Header />
            <div
                style={{
                    minHeight: '100vh',
                    padding: '20px',
                    background: '#f9f9f9',
                }}
            >
                {/* Image Slider Banner */}
                <div style={{ marginBottom: '30px', maxWidth: '1200px', margin: 'auto' }}>
                    <Slider {...sliderSettings}>
                        <div>
                            <img src={h1} alt="Slider 1" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px' }} />
                        </div>
                        <div>
                            <img src={h2} alt="Slider 2" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px' }} />
                        </div>
                        <div>
                            <img src={h3} alt="Slider 3" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px' }} />
                        </div>
                    </Slider>
                </div>

                {/* Search Bar */}
                <div className="search-container" style={{ textAlign: 'center' , marginTop: '60px'}}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', maxWidth: '400px', margin: 'auto' }}>
                        <span style={{ padding: '10px', background: '#f0f0f4', border: '1px solid #cccc', borderTopLeftRadius: '40px', borderBottomLeftRadius: '40px' }}>
                            <FaSearch />
                        </span>
                        <input
                            type="text"
                            placeholder="Search by Hotel name or City..."
                            value={searchTerm}
                            onChange={handleSearch}
                            className="form-control"
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #ccc',
                                borderLeft: 'none',
                                borderTopRightRadius: '40px',
                                borderBottomRightRadius: '40px',
                            }}
                        />
                        {searchTerm && (
                            <button
                                onClick={clearSearch}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    marginLeft: '-35px',
                                    padding: '10px',
                                }}
                            >
                                <FaTimes />
                            </button>
                        )}
                    </div>
                </div>

                {/* Employee Details */}
                <div className="row row-cols-1 row-cols-md-3" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {filteredUsers.map(user => (
                        <EmployeeDetails
                            key={user._id}
                            user={user}
                            handleModelOpen={handleModelOpen}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function EmployeeDetails({ user, handleModelOpen, deleteHandler }) {
    return (
        <div className="col-md-4 mb-3" style={{ marginTop: "30px", padding: "45px" }}>
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
                <div className="card-body" style={{ padding: "20px", backgroundColor: '#f1f8e9', flexGrow: 1 }}>
                    {Object.entries(user).map(([key, value]) =>
                        key !== '_id' && key !== '__v' && key !== 'uid' && key !== 'hotelname' && value ? (
                            <p
                                className="card-text"
                                key={key}
                                style={{
                                    margin: "12px 0",
                                    fontSize: "16px",
                                    color: "#333",
                                }}
                            >
                                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                            </p>
                        ) : null
                    )}
                </div>
                <div
                    className="card-footer"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
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
                    >
                        Booking Hotel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default StaffDetails;
