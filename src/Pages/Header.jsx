import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    const handleSearch = () => {
        alert("Search")
    }

    const handleLogout = () => {
        // alert("Logout")
        navigate("/login")
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100vw",          
            boxSizing: "border-box", 
            padding: "10px 20px",
            backgroundColor: "#300101ff",
            color: "white",
        }}
        >
            <button style={{
                padding: "8px 16px",
                backgroundColor: "#0b010bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
            }} onClick={handleSearch}>Search Product</button>

            <button style={{
                padding: "8px 16px",
                backgroundColor: "#0b010bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
            }} onClick={handleLogout}>LogOut</button>
        </div>)
}



