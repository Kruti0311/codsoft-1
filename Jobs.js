import React,{ useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';
import { hideLoading, showLoading } from '../redux/features/alertSlice';
const Jobs = () =>  {
    
        return(
           
<div>
    {/* <!--header--> */}
    <header class="header">
        <section class="flex">
            <div id="menu-btn" class="fas fa-bars-staggered"></div>
            <a href="Home.html" class="logo"><i class="fas fa-briefcase"></i>ViewJOB</a>
            <nav class="navbar">
                <a href="Home.js">Home</a>
                <a href="about.js">about us</a>
                <a href="jobs">all jobs</a>
                <a href="contact">Contact us</a>
                <a href="login">Log in</a>
            </nav>
            <a href="/application" class="btn" style={{margin: "top 0"}}>Build your application</a>
        </section>

    </header>
{/* <!--header section ends-->
<!--Job filter section starts--> */}
<section class="job-filter">
    <h1 class="heading">filter jobs</h1>
    <form action="" method="post"  >
        <div class="flex">
            <div class="box">
                <p>job title <span>*</span></p>
                <input type="text" name="company" placeholder="keyword, category or company" required maxlength="20"
                    class="input"  />
            </div>
            <div class="box">
                <p>job location <span>*</span></p>
                <input type="text" name="location" placeholder="city, state or country" required maxlength="50"
                    class="input"  />
            </div>
        </div>
        <div class="dropdown-container">
            <div class="dropdown">
                <input type="text" readonly placeholder="position" name="position" maxlength="20" class="output"/>
                <div class="lists"  >
                    <p class="items">frontend web developer</p>
                    <p class="items">backend web developer</p>
                    <p class="items">Software engineer</p>
                    <p class="items">data scientist</p>
                   
                </div>
            </div>
            <div class="dropdown">
                <input type="text" readonly placeholder="salay" name="date" maxlength="20" class="output"/>
                <div class="lists">
                    <p class="items">1k or less</p>
                    <p class="items">1k-5k</p>
                    <p class="items">5k-10k</p>
                    <p class="items">10k-15k</p>
                    <p class="items">20k-25k</p>
                    <p class="items">1lakh-10lakh</p>
                    <p class="items">10lakh-20lakh</p>
                    <p class="items">20lakh-30lakh</p>
                    <p class="items">40lakh-50lakh</p>
                    <p class="items">50lakh-1cror</p>
                    

                </div>
            </div>
            <div class="dropdown">
                <input type="text" readonly placeholder="education" name="date" maxlength="20" class="output"/>
                <div class="lists">
                    <p class="items">10th pass</p>
                    <p class="items">12th pass</p>
                    <p class="items">bachlor's degree</p>
                    <p class="items">master's degree</p>
                    <p class="items">diploma</p>
                </div>
            </div>
            <div class="dropdown">
                <input type="text" readonly placeholder="work shifts" name="date" maxlength="20" class="output"/>
                <div class="lists">
                    <p class="items">day shift</p>
                    <p class="items">night shift</p>           
                </div>
            </div>
        </div>
    </form>
</section>
{/* <!--Job filter section endss-->

<!--All jobs section start--> */}
<section class="job-container">
    <h1 class="heading">All jobs</h1>
    <div class="box-container">
        <div class="box">
            <div class="company">
                <img src="assets/images/img1.png" alt=""/>
                <div>
                    <h3>IT infosys co.</h3><span>2 days ago</span>
                </div>
            </div>
            <h3 class="job-title">senior web developer</h3>
            <p class="location"><i class="fas fa-map-maker-alt"></i><span>mumbai, INDIA</span></p>
            <div class="tags">
                <p><i class="fas fa-indian-rupee-sign"></i><span>10k-25k</span></p>
                <p><i class="fas fa-briefcase"></i><span>part-time</span></p>
                <p><i class="fas fa-clock"></i><span>day shift</span></p>

            </div>
            <div class="flex-btn">
                <a href="view_job.html" class="btn">view details</a>
                <button type="submit" class="far fa-heart" name="save"></button>
            </div>
        </div>



        <div class="box">
            <div class="company">
                <img src="assets/images/img2.jpeg" alt=""/>
                <div>
                    <h3>GyanDhan</h3><span>Just now</span>
                </div>
            </div>
            <h3 class="job-title">content writer</h3>
            <p class="location"><i class="fas fa-map-maker-alt"></i><span>Delhi,Noida</span></p>
            <div class="tags">
                <p><i class="fas fa-indian-rupee-sign"></i><span>2,16,000-3,60,000 /year</span></p>
                <p><i class="fas fa-briefcase"></i><span>full-time</span></p>
                <p><i class="fas fa-clock"></i><span>day shift</span></p>

            </div>
            <div class="flex-btn">
                <a href="view_job.html" class="btn">view details</a>
                <button type="submit" class="far fa-heart" name="save"></button>
            </div>
        </div>



        <div class="box">
            <div class="company">
                <img src="assets/images/img3.jpeg" alt=""/>
                <div>
                    <h3>Action or self reliance and alternatives(ASRA)</h3><span>6 days ago</span>
                </div>
            </div>
            <h3 class="job-title">Special Educator</h3>
            <p class="location"><i class="fas fa-map-maker-alt"></i><span>mumbai, INDIA</span></p>
            <div class="tags">
                <p><i class="fas fa-indian-rupee-sign"></i><span>2,00,0000 /year</span></p>
                <p><i class="fas fa-briefcase"></i><span>part-time</span></p>
                <p><i class="fas fa-clock"></i><span>night shift</span></p>

            </div>
            <div class="flex-btn">
                <a href="view_job.html" class="btn">view details</a>
                <button type="submit" class="far fa-heart" name="save"></button>
            </div>
        </div>



        <div class="box">
            <div class="company">
                <img src="assets/images/img3.jpeg" alt=""/>
                <div>
                    <h3>Action or self reliance and alternatives(ASRA)</h3><span>6 days ago</span>
                </div>
            </div>
            <h3 class="job-title">Occupational therapist</h3>
            <p class="location"><i class="fas fa-map-maker-alt"></i><span>Delhi</span></p>
            <div class="tags">
                <p><i class="fas fa-indian-rupee-sign"></i><span>2,00,000 /year</span></p>
                <p><i class="fas fa-briefcase"></i><span>part-time</span></p>
                <p><i class="fas fa-clock"></i><span>day shift</span></p>

            </div>
            <div class="flex-btn">
                <a href="view_job.html" class="btn">view details</a>
                <button type="submit" class="far fa-heart" name="save"></button>
            </div>
        </div>

        <div class="box">
            <div class="company">
                <img src="assets/images/img4.jpeg" alt=""/>
                <div>
                    <h3>MonkSays Superfoods private limited</h3><span>2 days ago</span>
                </div>
            </div>
            <h3 class="job-title">Telesales Executive</h3>
            <p class="location"><i class="fas fa-map-maker-alt"></i><span>Hydrabad</span></p>
            <div class="tags">
                <p><i class="fas fa-indian-rupee-sign"></i><span>10k-25k /month</span></p>
                <p><i class="fas fa-briefcase"></i><span>full-time</span></p>
                <p><i class="fas fa-clock"></i><span>day shift</span></p>

            </div>
            <div class="flex-btn">
                <a href="view_job.html" class="btn">view details</a>
                <button type="submit" class="far fa-heart" name="save"></button>
            </div>
        </div>

        <div class="box">
            <div class="company">
                <img src="assets/images/img5.jpeg" alt=""/>
                <div>
                    <h3>Exquisisite Experiential Marketing</h3><span>just now</span>
                </div>
            </div>
            <h3 class="job-title">Event management executive</h3>
            <p class="location"><i class="fas fa-map-maker-alt"></i><span>mumbai, INDIA</span></p>
            <div class="tags">
                <p><i class="fas fa-indian-rupee-sign"></i><span>5,00,000-6,00,000 /year</span></p>
                <p><i class="fas fa-briefcase"></i><span>full-time</span></p>
                <p><i class="fas fa-clock"></i><span>day shift</span></p>

            </div>
            <div class="flex-btn">
                <a href="view_job.html" class="btn">view details</a>
                <button type="submit" class="far fa-heart" name="save"></button>
            </div>
        </div>

        <div class="box">
            <div class="company">
                <img src="assets/images/img7.jpeg" alt=""/>
                <div>
                    <h3>Prosync Infotech private limited</h3><span>just now</span>
                </div>
            </div>
            <h3 class="job-title">E-Commerce management</h3>
            <p class="location"><i class="fas fa-map-maker-alt"></i><span>Delhi, INDIA</span></p>
            <div class="tags">
                <p><i class="fas fa-indian-rupee-sign"></i><span>9,000 /year</span></p>
                <p><i class="fas fa-briefcase"></i><span>full-time</span></p>
                <p><i class="fas fa-clock"></i><span>day shift</span></p>

            </div>
            <div class="flex-btn">
                <a href="view_job.html" class="btn">view details</a>
                <button type="submit" class="far fa-heart" name="save"></button>
            </div>
        </div>
        <div class="box">
            <div class="company">
                <img src="assets/images/img8.png" alt=""/>
                <div>
                    <h3>Messold Technologies</h3><span>just now</span>
                </div>
            </div>
            <h3 class="job-title">Facebook ads</h3>
            <p class="location"><i class="fas fa-map-maker-alt"></i><span>Work from home</span></p>
            <div class="tags">
                <p><i class="fas fa-indian-rupee-sign"></i><span>7,000-12,000 /month</span></p>
                <p><i class="fas fa-briefcase"></i><span>anytime</span></p>
                <p><i class="fas fa-clock"></i><span>any shift</span></p>

            </div>
            <div class="flex-btn">
                <a href="view_job.html" class="btn">view details</a>
                <button type="submit" class="far fa-heart" name="save"></button>
            </div>
        </div>
        <div class="box">
            <div class="company">
                <img src="assets/images/img9.jpeg" alt=""/>
                <div>
                    <h3>IntelliTicks Technologies private limited</h3><span>just now</span>
                </div>
            </div>
            <h3 class="job-title">Database Building/management</h3>
            <p class="location"><i class="fas fa-map-maker-alt"></i><span>mumbai, INDIA</span></p>
            <div class="tags">
                <p><i class="fas fa-indian-rupee-sign"></i><span>5,00,000-6,00,000 /year</span></p>
                <p><i class="fas fa-briefcase"></i><span>full-time</span></p>
                <p><i class="fas fa-clock"></i><span>day shift</span></p>

            </div>
            <div class="flex-btn">
                <a href="view_job.html" class="btn">view details</a>
                <button type="submit" class="far fa-heart" name="save"></button>
            </div>
        </div>
    </div>
   
</section>
{/* <!--All jobs section ended-->

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
    </div>
   
        );
    }

export default Jobs;
