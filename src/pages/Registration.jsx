import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postRequest } from "../api/axiosCalls";
import { apiEndPoint } from "../api/ApiEndPoints";
import "../style/Registration.css"

const Registration = () => {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userConfirmPassword, setUserConfirmPassword] = useState("");
    const [userName, setUserName] = useState("");
    const submitSignIn = (e) => {
        e.preventDefault();
        if (userPassword === userConfirmPassword) {
            if(userName === userPassword || userEmail === userPassword){
                toast.error("Password cannot be the same as your username or email.")
            }else{
                toast.success("Successfuly Register")
                setTimeout(() => {
                    navigate("/")
                }, 3500);
            }
            // postRequest(apiEndPoint.logIn,{userId : userId, userPassword : userPassword})
            // .then((response) => {
            //     response.data.status === "Success" ? navigate("/dashboard") : navigate("/");
            //     sessionStorage.setItem("userId",userId);
            // })
            // .catch((error) => console.error(error))
        }
        else {
            toast.error("Check Your Credentials")
        }
    }
    return (
        <>
            <div className="main-container">
                <form onSubmit={submitSignIn}>
                    <h1>LogIn</h1>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail0" className="form-label">Name</label>
                        <input type="test" className="form-control" id="exampleInputEmail0" aria-describedby="emailHelp" required onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required onChange={(e) => setUserEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number, one uppercase and one lowercase letter, and at least 8 or more characters"  required onChange={(e) => setUserPassword(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword2" required onChange={(e) => setUserConfirmPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary me-2">Sign Up</button>
                    <button type="button" className="btn btn-primary ms-2" onClick={(e) =>{navigate("/")}}>Log In</button>
                </form>
            </div>
            <ToastContainer/>
        </>
    );
};

export default Registration;