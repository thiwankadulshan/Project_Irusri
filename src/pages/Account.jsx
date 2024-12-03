import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CartCard from "../components/CartCard";
import items from "../assets/data";
import "../style/Account.css"

const Account = () => {

    const [item, setItem] = useState([]);
    const [price, setPrice] = useState("");
    const [refresh, setRefresh] = useState(0);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const logedInUser = queryParams.get("loggedInUser");
    const [user, domain] = logedInUser.split("@")


    useEffect(() => {
        let cart = JSON.parse(localStorage.getItem('cartitem')) || [];
        let filterData = [];
        for (let i = 0; i < cart.length; i++) {
            for (let j = 0; j < items.length; j++) {
                if (cart[i].id === items[j].id) {
                    filterData.push(items[j]);
                    break;
                }
            }
        }

        let newPrice = 0;
        for (let i = 0; i < filterData.length; i++) {
            for (let j = 0; j < cart.length; j++){
                if(filterData[i].id === cart[j].id){
                    const element = filterData[i].price;
                    const priceValue = parseFloat(element.replace("Rs", ""));
                    newPrice += priceValue * cart[j].count;
                    break;
                }
            }
        }        
        setPrice(newPrice)
        setItem(filterData);
    }, [refresh])

    return (
        <>
            <div className="account-maindiv">
                <h1>Welcome {user}</h1>
                <div className="account-bodydiv mt-4">
                    {item.map((items, index) => (
                        <CartCard key={index} itemData={items} setRefresh={setRefresh}></CartCard>
                    ))}
                </div>
                <div className="account-bodydiv mt-4">
                    <h1>TOTAL PRICE</h1>
                    <p>rs. {price}</p>
                    <a className="btn btn-primary m-1" onClick={(e) => { navigate(`cart/${data.id}`) }}>Buy All</a>
                </div>
            </div>
        </>
    )
};

export default Account;