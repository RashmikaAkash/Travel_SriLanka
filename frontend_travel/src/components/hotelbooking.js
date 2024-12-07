import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { FaSearch, FaTimes } from 'react-icons/fa';
import Header from '../components/header';

function StaffDetails() {
    const [users, setUsers] = useState([]);
    const [modelState, setModelState] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});
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

    // Filter users based on the search term (searching both hotel name and city)
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSelectedUser({ ...selectedUser, [name]: value });
    };

    const updateHandler = async () => {
        try {
            if (!/^EM\d+$/.test(selectedUser.eid)) {
                Swal.fire("Error!", "Employee ID should start with 'EM' followed by numbers.", "error");
                return;
            }

            if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(selectedUser.Fname)) {
                Swal.fire("Error!", "Please enter a valid first name.", "error");
                return;
            }

            if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(selectedUser.Lname)) {
                Swal.fire("Error!", "Please enter a valid last name.", "error");
                return;
            }

            await axios.put(`http://localhost:8070/hotel/update/${selectedUser._id}`, selectedUser);
            const updatedUsers = users.map(user =>
                user._id === selectedUser._id ? selectedUser : user
            );
            setUsers(updatedUsers);
            setModelState(false);
            Swal.fire("Updated!", "Employee details have been updated.", "success");
        } catch (error) {
            console.error("Error updating employee:", error.message);
        }
    };

    const deleteHandler = async (id) => {
        try {
            await axios.delete(`http://localhost:8070/hotel/delete/${id}`);
            const updatedUsers = users.filter(user => user._id !== id);
            setUsers(updatedUsers);
            Swal.fire("Deleted!", "Employee has been deleted.", "success");
        } catch (error) {
            console.error("Error deleting employee:", error.message);
        }
    };

    const clearSearch = () => {
        setSearchTerm(""); // Clear the search input
    };

    return (
        <div>
            <Header />
            <div
                style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                    backgroundRepeat: 'no-repeat',
                    margin: 0,
                    padding: '20px'
                }}
            >
                <div className="search-container" style={{ textAlign: 'center' }}>
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

                <div className="row row-cols-1 row-cols-md-3" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {filteredUsers.map(user => (
                        <EmployeeDetails
                            key={user._id}
                            user={user}
                            handleModelOpen={handleModelOpen}
                            deleteHandler={deleteHandler}
                        />
                    ))}
                </div>

                <Modal show={modelState} onHide={() => setModelState(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            {Object.entries(selectedUser).map(([key, value]) =>
                                key !== '_id' && key !== '__v' && (
                                    <div className="mb-3" key={key}>
                                        <label htmlFor={`update${key}`} className="form-label">
                                            {key.charAt(0).toUpperCase() + key.slice(1)}
                                        </label>
                                        <input
                                            type="text"
                                            id={`update${key}`}
                                            className="form-control"
                                            name={key}
                                            value={value}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                )
                            )}
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-primary" onClick={updateHandler}>
                            Update
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}

function EmployeeDetails({ user, handleModelOpen, deleteHandler }) {
    return (
        <div className="col-md-4 mb-3" style={{ marginTop: "30px", padding: "60px" }}>
            <div
                className="card"
                style={{
                    background: "linear-gradient(135deg, #e0f7fa, #80deea)", // Smooth gradient
                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
                    borderRadius: "20px", // Rounded corners for a modern touch
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                }}
            >
                <div
                    className="card-header"
                    style={{
                        backgroundColor: "#00695c", // Rich, modern green-blue color
                        color: "#fff",
                        padding: "20px",
                        textAlign: "center",
                        fontSize: "20px", // Larger header for emphasis
                        fontWeight: "600", // Slightly bold for a modern feel
                        borderTopLeftRadius: "20px",
                        borderTopRightRadius: "20px",
                    }}
                >
                    {user.hotelname}
                </div>
                <div className="card-body" style={{ padding: "25px", backgroundColor: '#f1f8e9', flexGrow: 1 }}>
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
                        onClick={() => handleModelOpen(user)}
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
                        Booking
                    </button>
                    
                </div>
            </div>
        </div>
    );
}


export default StaffDetails;
