import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-row">
          <div className="footer-col footer-col-1">
            <h4>ABOUT US</h4>
            <p>
            SNC Dental clinics is a specialist in management of mouth Ulcers, all types of oral pains, TMJ disorders & tobacco induced lesions of the mouth.
            </p>
            <div className="contact-detail">
              <p>Contact Number : +91 98909-03544 </p>
              <p>Contact Number : +91 72497-77553</p>
              <p>Phone Number : 02402-324134 </p>
            </div>
            <div className="footer-icon">
              <a href="https://www.facebook.com/shahu.kazi.3">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://twitter.com/advsskazi2/status/1591317421931266051?s=48&t=9AH-0kOh-XOvdb6Jrc2Gmg">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.youtube.com/watch?v=9TzmxdIU5fE">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="footer-col footer-col-2">
            <h4>OPENING HOURS</h4>
            <p>
            SNC Dental clinics is a specialist in management of mouth Ulcers, all types of oral pains, TMJ disorders & tobacco induced lesions of the mouth.
            </p>
          </div>

          <div className="footer-col">
          
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58885.46048634286!2d75.7762752!3d22.7155531!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fda4913b4dd7%3A0xbbb19a0def86bc7f!2sSmile%20n%20Care%20dental%20clinic!5e0!3m2!1sen!2sin!4v1670314906419!5m2!1sen!2sin"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>

      <div className="policy" id="footer-policy">
        <div className="policy-row">
          <div className="policy-col">
            <p>Copyright © SNC Dental clinics</p>
          </div>
          <div className="policy-col">
            <p>
              Design with <i class="fa-sharp fa-solid fa-heart"></i> by{" "}
              <a href="https://maitretech.com/">maitretech.com</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
