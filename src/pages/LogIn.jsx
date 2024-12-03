import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style/LogIn.css"

const LogIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const submitLogIn = (e) => {
        e.preventDefault();
        if(userPassword ==="irusri" && userEmail === "irusri@gmail.com"){
            dispatch(login(userEmail));
            toast.success(`Welcome ${userEmail}`)
            setTimeout(() => {
                navigate("/dashboard")
            }, 3500);
        }else {
            toast.error("Check Your Credentials")
        }
    }
    return (
        <>
            <div className="main-container">
                <form onSubmit={submitLogIn}>
                    <h1>LogIn</h1>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required onChange={(e) => setUserEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" required onChange={(e) => setUserPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary me-2">Log In</button>
                    <button type="button" className="btn btn-primary ms-2" onClick={(e) =>{navigate("/register")}}>Register</button>
                </form>
            </div>
            <ToastContainer/>
        </>
    );
};

export default LogIn;