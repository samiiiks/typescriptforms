import axios from 'axios';
import React, { useState, FormEvent, FunctionComponent } from 'react'
import { toast } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom';

const API_URL = "https://reqres.in/api";

const SignupForm: FunctionComponent = () => {
    const validateEmail = (mail: string) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true)
        }
        toast.error("You have entered an invalid email address!")
        return (false)
    }
    const validatePassword = (password: string) => {

        if (/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)) {
            toast.success('pass');
            return true;
        }
        return false;
    }

    const [SignupFormData, setSignupFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();


    const handleOnInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSignupFormData({ ...SignupFormData, [event.currentTarget.name]: event.currentTarget.value });

    }
    const handleOnFormSubmit = async (event: FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const reqData = {
            "email": SignupFormData?.email,
            "password": SignupFormData?.password,
        }
        if (reqData.email !== "" && reqData.password !== "") {

            validateEmail(reqData.email)
            validatePassword(reqData.password)

            try {
                const resData = await axios.post(
                    `${API_URL}/Register`,
                    reqData);

                if (resData.status === 200) {
                    localStorage.setItem('token', resData.data.token)
                    toast.success("you are registered successfully.")
                    navigate('/login')
                } else {
                    localStorage.setItem('token', "")
                    toast.error("something went wrong.")
                }
            }
            catch (e) {
                console.log(e);
                toast.error("Form submited with error")
                localStorage.setItem('token', "")
            }
        }
        else {
            toast.error("Email and Password should not be empty.")
        }
        console.log(SignupFormData.email, SignupFormData.password)
    }
    return (
        <div>
            <div className="center">
                <h1>Signup form</h1>
                <form method="post">
                    <div className="txt_field">

                        <input type="text" name="email" onChange={handleOnInputChange} />
                        <span></span>
                        <label>Email</label>
                    </div>

                    <div className="txt_field">
                        <input type="password" name="password" onChange={handleOnInputChange} />
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div className="pass">Forgot password?</div>
                    <button className="signup" onClick={handleOnFormSubmit}>Signup</button>
                    <span className='link'><Link to="/login">Login</Link></span>      
                    <div className="signup_link">   
                     
                    </div>
                </form>
            </div>
        </div>
    )
}


export default SignupForm
