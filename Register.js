import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { useDispatch,TypedUseSelectorHook, useSelector } from 'react-redux';
import { message } from 'antd';
import { hideLoading, showLoading } from '../redux/features/alertSlice';
import Spinner from '../components/Sppiner';

const Register = () => {

    /*const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [location, setLocation] = useState("");*/

    const [values, setValues] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
        location: ""
        
    })

   
    
    const handleChange = (e) => {
        const value = e.target.value
        setValues({
            ...values,
            [e.target.name]: value,
        })
    }

   
 //redux state
    const {loading}=useSelector(state=> state.alerts)
    //hooks
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //form function 
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (!values) {
                return alert('please provide all fields');
            }
            dispatch(showLoading());
            const { data } = await axios.post('/api/v1/auth/register', values)
            dispatch(hideLoading());
            if (data.success) {
                alert('Register successfully');
                navigate('/Login');
            }
        } catch (error) {
            dispatch(hideLoading());
            alert('invalid form please try agian');
            console.log(error)
        }
    }
    return (
        <>
        {loading ?(<Spinner/>):(
            <div>
            {/* <!--header--> */}
            <header class="header">
                <section class="flex">
                    <div id="menu-btn" class="fas fa-bars-staggered"></div>
                    <a href="Home.html" class="logo"><i class="fas fa-briefcase"></i>ViewJOB</a>
                    <nav class="navbar">
                        <a href="Home.js">Home</a>
                        <a href="about.js">about us</a>
                        <a href="jobs.js">all jobs</a>
                        <a href="contact.js">Contact us</a>
                        <a href="login.js">Log in</a>
                    </nav>
                    <a href="/application" class="btn" style={{margin: "top 0"}}>Build your application</a>

                </section>

            </header>
            {/* <!--header section ends-->


<!--Log in section started--> */}
            <div class="account-form-container">
                <section class="account-form">
                    <form action="" method="post" onSubmit={handleSubmit}>
                        <h3>Welcome!</h3>
                        <input type="text" name="name" maxlength="50" placeholder="Enter your First Name" class="input" value={values.name} onChange={handleChange} />
                        <input type="text" name="lastname" maxlength="50" placeholder="Enter your Last Name" class="input" value={values.lastname} onChange={handleChange} />
                        <input type="text" name="email" maxlength="50" placeholder="Enter your email" class="input" value={values.email} onChange={handleChange} />
                        <input type="password" name="password" maxlength="20" placeholder="Enter your password" class="input" value={values.password} onChange={handleChange} />
                        <input type="text" name="location" maxlength="20" placeholder="Enter your location" class="input" value={values.location} onChange={handleChange} />                       
                        <a href='/employee'>employee</a>
                        <p>Already have an account? <a href="/login">Login now</a></p>
                        <input type="submit" name="submit" class="btn" value="Register Now now" />
                    </form>
                </section>
            </div>
            {/* <!--Log in section ended-->

<!--Footer section started--> */}
            <footer class="footer">
                <section class="grid">
                    <div class="box">
                        <h3>quick links</h3>
                        <a href="Home.html"><i class="fas fa-angle-right"></i>Home</a>
                        <a href="about.html"><i class="fas fa-angle-right"></i>About us</a>
                        <a href="jobs.html"><i class="fas fa-angle-right"></i> all Jobs</a>
                        <a href="contact.html"><i class="fas fa-angle-right"></i>Contact us</a>
                        <a href="#"><i class="fas fa-angle-right"></i>filter search</a>

                    </div>
                    <div class="box">
                        <h3>extra links</h3>
                        <a href="#"><i class="fas fa-angle-right"></i>account</a>
                        <a href="login.html"><i class="fas fa-angle-right"></i>log in</a>
                        <a href="register.html"><i class="fas fa-angle-right"></i>Register</a>
                        <a href="#"><i class="fas fa-angle-right"></i>post job</a>
                        <a href="#"><i class="fas fa-angle-right"></i>dashboard</a>
                    </div>
                    <div class="box">
                        <h3>follow us</h3>
                        <a href="#"><i class="fab fa-facebook-f"></i>facebook</a>
                        <a href="#"><i class="fab fa-twitter"></i>twitter</a>
                        <a href="#"><i class="fab fa-instagram"></i>instagram</a>
                        <a href="#"><i class="fab fa-linkedin"></i>linkedin</a>
                        <a href="#"><i class="fab fa-youtube"></i>youtube</a>

                    </div>
                </section>
                <div class="credit">&copy; copyright @ 2023 by <span>vaniptl</span> | all rights reserved</div>
            </footer>
            {/* <!--Footer section ended--> */}


            <script src="index.js"></script>

        </div>
        )}
            
        </>
    )

}
export default Register;