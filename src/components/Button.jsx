import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

const Button = ({message}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, type, path] = message|| [];

    const handleOnClick = () => {
        path === "/" ? (dispatch(logout()), navigate(path), localStorage.clear()) : navigate(path)
    }
    return(
        <>
            <button className={`btn btn-${type}`} onClick={handleOnClick}>{name}</button>
        </>
    );
};
export default Button;