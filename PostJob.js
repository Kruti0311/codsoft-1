import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';
import { hideLoading, showLoading } from '../redux/features/alertSlice';

const PostJob = () => {

    const [values, setValues] = useState({
        company: "",
        position: ""
    })
    const handleChange = (e) => {
        const value = e.target.value
        setValues({
            ...values,
            [e.target.name]: value,
        })
    }

    //redux state
    const { loading } = useSelector(state => state.alerts)
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
            const { data } = await axios.post('/api/v1/job/create-job', values)

            if (data.success) {
                dispatch(hideLoading());
                localStorage.setItem('token', data.token);
                alert('posted successfully');
                navigate('/employee');
            }
        } catch (error) {
            dispatch(hideLoading());
            alert('Posted successfully');
            console.log(error);
        }
    }
    return (
    <div class="account-form-container">
    <section class="account-form">
        <form action="" method="post" onSubmit={handleSubmit}>
            <h3>POST NEW NEW</h3>
            <input type="text" name="company" maxlength="50" placeholder="Enter Company name" class="input" value={values.company} onChange={handleChange} />
            <input type="text" name="position" maxlength="20" placeholder="Enter Position" class="input" value={values.position} onChange={handleChange} />
            <input type="submit" name="submit" class="btn" value="Post new job" />
            
            </form>
                </section>
            </div>
           
            )
        }
        
        export default PostJob;