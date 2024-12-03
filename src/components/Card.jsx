import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ itemData }) => {
    const [data, setData] = useState({});
    const [count, setCount] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        setData(itemData);
    }, [itemData])

    const changeCount = (e) => {
        const newCount = parseInt(e.target.value, 10);
        setCount(isNaN(newCount) ? 1 : newCount)
    }    

    const addToCart = (item,count) => {
        let cart = JSON.parse(localStorage.getItem('cartitem')) || [];
        
        const existItem = cart.findIndex(items => items.id === item.id)
        if(existItem !== -1) {
            cart[existItem].count += count;
        } else {
            cart.push({id: item.id, count});
        }

        localStorage.setItem("cartitem", JSON.stringify(cart));
    }
    return (
        <>
            <div className="card w-100">
                <img className="card-img-top" src={data.url} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{data.name || "Body Empty"}</h5>
                    <p className="card-text">{data.discription || "Discription Empty"}</p>
                    <h6 className="card-title">{data.price || "Price Empty"}</h6>
                    <a className="btn btn-primary m-1" onClick={(e) => { navigate(`cart/${data.id}`) }}>Buy Item</a>
                    <a className="btn btn-primary m-1" onClick={() => addToCart(data, count)}>Add To Cart</a>
                    <a><input type="number" className="btn btn-secondary m-1 w-50" value={count} onChange={changeCount}/>Quantity</a>
                </div>
            </div>
        </>
    )
};

export default Card;