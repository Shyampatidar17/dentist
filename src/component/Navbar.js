import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const[down,setDown] = useState(false);
  const[downt,setDownt] = useState(false);
  const[downth,setDownth] = useState(false);

  
  
  return (
    <>
      {/* ------------------------top-nav------------------------- */}
      
      <div className="top-nav">
        <div className="topnav-row">
          <div className="topnav-col">
            <div className="topnav-phone">
              <i class="fa-solid fa-phone"></i>
              <span> 07312419988</span>
            </div>
            <div>
              <i class="fa-solid fa-location-dot"></i>
              <span>Jawhar Marg, Indore</span>
            </div>
          </div>
          <div className="topnav-col">
            <div className="topnav-phone">
              <i class="fa-solid fa-clock"></i>
              <span>Mon to Sat 10:30am to 2:30pm And 5:30pm to 8:30pm</span>
            </div>
            <div className="topnav-icon">
              <a href="">
                <i class="fa-brands fa-square-facebook"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-square-twitter"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-square-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------menu-nav------------------- */}

      <div className="menu-bar">
        <div className="menubar-row">
          <div className="menubar-col">
            <img src="" alt="Dentist-logo" />
          </div>
          <div className={show?"menubar-mobile":"menubar-col-1"}>
            <ul>
            <button className="close-menu" onClick={()=>setShow(!show)}>{show?<i class="fa-solid fa-xmark"></i>:null}</button>
              <li><Link to="/">Home</Link></li>
              <li><a href="#">About Us <button onClick={()=>setDown(!down)} className="drop-icon">{down?<i class=" drop-icon fa-solid fa-minus"></i> : <i class=" drop-icon fa-solid fa-plus"></i>}</button></a>
             
            {
              down?<div className="drop-link" onClick={()=>setDown(!down)}>
              <li><Link to="/doctor">Dr. Arati Chaudhary</Link></li>
               <li><a href="#">Dr. Gunjan Chaudhary</a></li>
               <li><a href="#">Gallery</a></li>
               <li><a href="#">Testimonial</a></li>
              </div>:""
            }

              </li>
              <li><a href="#">Specialized Services<button onClick={()=>setDownt(!downt)
              } className="drop-icon">{downt?<i class=" drop-icon fa-solid fa-minus"></i> :<i class=" drop-icon fa-solid fa-plus"></i>}</button></a>
              {
              downt?<div className="drop-link" onClick={()=>setDownt(!downt)}>
              <li><Link to="/dentaldiabetes">Dental treatment in diabetes</Link></li>
               <li><a href="#">Dental treatment in oral cancer patients</a></li>
               <li><a href="#">Oral Biopsy procedures</a></li>
               <li><a href="#">Tobacco habit cessation</a></li>
               <li><a href="#">Treatment of oral ulcers</a></li>
               <li><a href="#">Treatment of head & neck &TM joint pains</a></li>
              </div>:""
            }
              </li>
              <li><a href="#">Dental Services<button onClick={()=>setDownth(!downth)} className="drop-icon">{downth?<i class=" drop-icon fa-solid fa-minus"></i> :<i class=" drop-icon fa-solid fa-plus"></i>}</button></a>
              {
              downth?<div className="drop-link" onClick={()=>setDownth(!downth)}>
              <li><Link to="/rootcanal">Root Canal Treatment</Link></li>
               <li><a href="#">Crown & Bridges</a></li>
               <li><a href="#">Dentures</a></li>
               <li><a href="#">Wisdom Teeth</a></li>
               <li><a href="#">Wisdom Teeth</a></li>
               <li><a href="#">Dental Implant</a></li>
               <li><a href="#">Smile Makeover</a></li>
               <li><a href="#">Braces & Aligners</a></li>
               <li><a href="#">Kids Dentistry</a></li>
              </div>:""
            }
              
              </li>
              <li><Link to="/teledentistry">Teledentistry</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <button className="menu-icon" onClick={()=>setShow(!show)}>{show?null:<i class="fa-solid fa-bars"></i>}</button>
        </div>
      </div>
     
     


    </>
  );
};

export default Navbar;
