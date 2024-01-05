import React,{ useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';
import { hideLoading, showLoading } from '../redux/features/alertSlice';
const Application = () =>  {
    
        return(
            <>

  <div className="container">
  <div className="apply_box">
    <h1>
      <a href="#first_name">Your Job Application <span className="title_small"></span></a>
    </h1>
    <form action="https://formsubmit.co/e5cc5f7becc8fe1ead61e9e9f5afc74a" className="form" method="POST">
      <div className="form_container">
        <div className="form_control">
          <label htmlFor="first_name">First name</label>
          <input id="first_name" name="first_name" placeholder="Enter your first name" autoComplete="off" required />
          <input type="hidden" name="_next" defaultValue="/freedom4/login2.html" />
        </div>
        <div className="form_control">
          <label htmlFor="last_name">Last name</label>
          <input id="last_name" name="last_name" placeholder="Enter your Last name" autoComplete="off" required />
        </div>
        <div className="form_control">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your Email.." autoComplete="off" required />
        </div>
        <div className="form_control">
          <label htmlFor="phone">Your Phone No.</label>
          <input type="number" id="phone" name="phone" placeholder="Enter your Mobile No." autoComplete="off" required />
        </div>
        <div className="form_control">
          <label htmlFor="job_rol">Your Job Rol</label>
          <select name="job_rol" id="job_rol">
            <option value="frontend">Front-end developer</option>
            <option value="backend">Back-end developer</option>
            <option value="full_stack">Full Stack developer</option>
            <option value="ui_ux">UI - UX developer</option>
          </select>
        </div>
        <div className="form_control">
          <label htmlFor="link">Your Portfolio link</label>
          <input type="link" id="link" name="link" placeholder="Enter your Portfolio link.." required />
        </div>
        <div className="textarea_control">
          <label htmlFor="address">Your Address</label>
          <textarea type="text" id="address" name="address" placeholder="Enter your Address.." autoComplete="off" rows={4} cols={50} defaultValue={""} />
        </div>
        <div className="form_control">
          <label htmlFor="city">Your City</label>
          <input type="text" id="city" name="city" placeholder="Enter your City (Town).." autoComplete="off" required />
        </div>
        <div className="form_control">
          <label htmlFor="pin">Pin Code</label>
          <input type="number" id="pin" name="pin" placeholder="Enter your Pin Code.." defaultValue={493662} autoComplete="off" readOnly required />
        </div>
        <div className="form_control">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" defaultValue="2022-11-10" required />
        </div>
        <div className="form_control">
          <label htmlFor="files">Upload your C.V.</label>
          <input id="files" type="file" name="file" multiple="multiple" accept="image/jpeg, image/png, image/jpg, image/svg" />
          <output id="result">
          </output></div>
      </div>
      <div className="button_container">
        <button type="submit">Apply Now</button>
      </div>
    </form>
  </div>
</div>

    <script src="/aplication-form/js/upload.js"></script>
  
</>
)

            
}
export default Application;