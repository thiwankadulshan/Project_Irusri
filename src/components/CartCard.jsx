import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartCard = ({ itemData, setRefresh }) => {
    const [data, setData] = useState({});
    const [count, setCount] = useState(0);
    const [cartCardReferesh, setCartCardReferesh] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        setData(itemData);
        let cart = JSON.parse(localStorage.getItem('cartitem')) || [];
        for (let i = 0; i < cart.length; i++) {
            if (data.id === cart[i].id) {
                let count = cart[i].count;
                setCount(count)
                break;
            }
        }
    }, [itemData,data.id,cartCardReferesh])

    const deleteItem = (item) => {
        let cart = JSON.parse(localStorage.getItem('cartitem')) || [];
        const itemIdToRemove = item.id;
        const itemIndex = cart.findIndex(items => items.id === itemIdToRemove);

        if (itemIndex !== -1) {
            cart.splice(itemIndex, 1);
            console.log("Item removed from the cart.");
        } else {
            console.log("Item not found in the cart.");
        }
        localStorage.setItem("cartitem", JSON.stringify(cart));
        setRefresh(prev => prev + 1)

    }

    const removeItem = (item) => {
        let cart = JSON.parse(localStorage.getItem('cartitem')) || [];
        const itemIdToRemove = item.id;
        const itemIndex = cart.findIndex(items => items.id === itemIdToRemove);
        if (itemIndex !== -1) {
            if (cart[itemIndex].count > 1) {
                cart[itemIndex].count -= 1;
            } else {
                cart.splice(itemIndex, 1);
            }
            localStorage.setItem("cartitem", JSON.stringify(cart));
        }
        setRefresh(prev => prev + 1)
        setCartCardReferesh(prev => prev + 1)
    }
    return (
        <>
            <div className="cart-card w-100 mb-3 d-flex align-items-center">
                <img className="cart-card-img" src={data.url} alt="Card image cap" />
                <div className="cart-card-body d-flex flex-column justify-content-center">
                    <h5 className="cart-card-title">{data.name || "Body Empty"}</h5>
                    <p className="cart-card-text">{data.discription || "Discription Empty"}</p>
                    <h6 className="cart-card-title">{data.price + " X " + count || "Price Empty"}</h6>
                </div>
                <div>
                    <a className="btn btn-primary m-1" onClick={(e) => { navigate(`cart/${data.id}`) }}>Buy Item</a>
                    <a className="btn btn-danger m-1" onClick={(e) => { deleteItem({ id: data.id }) }}>Delete</a>
                    <a className="btn btn-secondary m-1" onClick={(e) => { removeItem({ id: data.id }) }}>Remove</a>
                </div>
            </div>
        </>
    )
};

export default CartCard;