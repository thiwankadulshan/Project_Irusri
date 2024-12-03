import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import items from "../assets/data";
import NavBar from "../components/NavBar";
import "../style/DashBoard.css";
const DashBoard = () => {
    const [item, setItem] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        setItem(items)
    },[])

    const searchItem = (e) => {
        e.preventDefault();
        if(!search){
            setItem(items)
        }else{
            setItem(items.filter(item => item.name === search))
        }
    }
    return (
        <>
            <NavBar />
            <div className="dashpoard-search">
                <input type="text" className="dashboard-input" onChange={(e) => {setSearch(e.target.value)}}/>
                <button className="dashbord-btn btn btn-success" onClick={searchItem}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                </button>
            </div>
            <h1 className="p-4">DASHBOARD</h1>
            <div className="dashboard-main-container">
                <div className="dashboard-card">
                    {item.map((items, index) => (
                        <Card key={index} itemData={items}></Card>
                    ))}
                </div>
            </div>
        </>
    )
};

export default DashBoard;