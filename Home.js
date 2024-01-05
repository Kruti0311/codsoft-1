import React from 'react';

class Home extends React.Component {
    render() {
        return (
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
                            <a href="contact.js">Contact us</a>
                            <a href="login">Log in</a>
                        </nav>
                        <a href="/application" class="btn" style={{ margin: "top 0" }}>Build your Application</a>
                    </section>

                </header>
                {/* <!--header section ends-->
    <!--home section starts--> */}
                <div class="home-container" >
                    
                    <section class="home" >
                        
                        <form action="" method="post">
                            <h3>find your next job</h3>
                            <p>job title <span>*</span></p>
                            <input type="text" name="title" placeholder="keyword, category or company" required maxlength="20"
                                class="input" />
                            <p>job location <span>*</span></p>
                            <input type="text" name="title" placeholder="city, state or country" required maxlength="50"
                                class="input" />
                            <input type="submit" value="search job" class="btn" name="search" />
                        </form>
                    </section>
                </div>
                {/* <!--home section ends-->
    <!--category section starts--> */}
                <section class="category">
                    <img src='public/assets/images/dreamjob.jpg'></img>
                    <h1 class="heading">Job Categories</h1>
                    <div class="box-container">
                        <a href="#" class="box">
                            <i class="fas fa-code"></i>
                            <div>
                                <h3>web developer</h3>
                                <span>2300</span>
                            </div>
                        </a>
                        <a href="#" class="box">
                            <i class="fas fa-hand-holding-dollar"></i>
                            <div>
                                <h3>finance</h3>
                                <span>1000 jobs</span>
                            </div>
                        </a>
                        <a href="#" class="box">
                            <i class="fas fa-person-digging"></i>
                            <div>
                                <h3>labour</h3>
                                <span>4000 jobs</span>
                            </div>
                        </a>
                        <a href="#" class="box">
                            <i class="fas fa-pen"></i>
                            <div>
                                <h3>designer</h3>
                                <span>5000 jobs</span>
                            </div>
                        </a>
                        <a href="#" class="box">
                            <i class="fas fa-chalkboard-user"></i>
                            <div>
                                <h3>teacher</h3>
                                <span>100 jobs</span>
                            </div>
                        </a>
                        <a href="#" class="box">
                            <i class="fa-solid fa-badge-check"></i>
                            <div>
                                <h3>maketing</h3>
                                <span>1200 jobs</span>
                            </div>
                        </a>
                        <a href="#" class="box">
                            <i class="fa-solid fa-highlighter"></i>
                            <div>
                                <h3>web designer</h3>
                                <span>1200 jobs</span>
                            </div>
                        </a>
                    </div>
                </section>
                {/*  <!--category section endss-->
    <!--Job section started--> */}
                <section class="job-container">
                    <h1 class="heading">latest jobs</h1>
                    <div class="box-container">
                        <div class="box">
                            <div class="company">
                                <img src="assets/images/img1.png" alt="" />
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
                                <a href="/jobs" class="btn">view details</a>
                                <button type="submit" class="far fa-heart" name="save"></button>
                            </div>
                        </div>



                        <div class="box">
                            <div class="company">
                                <img src="assets/images/img2.jpeg" alt="" />
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
                                <a href="/jobs" class="btn">view details</a>
                                <button type="submit" class="far fa-heart" name="save"></button>
                            </div>
                        </div>



                        <div class="box">
                            <div class="company">
                                <img src="assets/images/img3.jpeg" alt="" />
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
                                <a href="/jobs" class="btn">view details</a>
                                <button type="submit" class="far fa-heart" name="save"></button>
                            </div>
                        </div>



                        <div class="box">
                            <div class="company">
                                <img src="assets/images/img3.jpeg" alt="" />
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
                                <a href="/jobs" class="btn">view details</a>
                                <button type="submit" class="far fa-heart" name="save"></button>
                            </div>
                        </div>

                        <div class="box">
                            <div class="company">
                                <img src="assets/images/img4.jpeg" alt="" />
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
                                <a href="/jobs" class="btn">view details</a>
                                <button type="submit" class="far fa-heart" name="save"></button>
                            </div>
                        </div>

                        <div class="box">
                            <div class="company">
                                <img src="assets/images/img5.jpeg" alt="" />
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
                                <a href="/jobs" class="btn">view details</a>
                                <button type="submit" class="far fa-heart" name="save"></button>
                            </div>
                        </div>
                    </div>
                    <div style={{ textAlign: "center", marginTop: "2rem" }}>
                        <a href="/jobs" class="btn">view all</a>
                    </div>
                </section>
                {/* <!--Job section ended--> */}

                {/* <!--Footer section started--> */}
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


                {/* <script src="index.js"></script> */}

            </div>
        );
    }
}

export default Home;