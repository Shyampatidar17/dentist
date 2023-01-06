import React from "react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [verified, setVerified] = useState(false);

  //recaptcha function
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }
  return (
    <>
      <div className="dr-header">
        <div className="header-contant">
          <h1>Contact Us</h1>
          <p>Dentist {" > "} Contact Us</p>
        </div>
      </div>

      <div className="contact">
        <div className="contact-row">
          <div className="contact-col">
            <h2>Our Office Inforamtion</h2>
            <div className="contact-col-l con-bor">
              <i class="fa-solid fa-location-dot"></i>
              <div className="contact-cont">
                <h5>Location</h5>
                <p>
                  Shreeji Towers, Raj Mohalla(N), Jawhar Marg, Indore., Raj
                  Mohalla, Indore - 452002, Opp. HDFC Bank
                </p>
              </div>
            </div>
            <div className="contact-col-l con-bor">
              <i class="fa-solid fa-phone-volume"></i>
              <div>
                <h5>Call Us</h5>
                <p>(0731)2419988, 9826297008</p>
              </div>
            </div>
            <div className="contact-col-l">
              <i class="fa-solid fa-envelope"></i>
              <div>
                <h5>Email</h5>
                <p>info@sncdentalclinics.com</p>
              </div>
            </div>
          </div>
          <div className="contact-col contact-col-r">
            <p>WHO WE ARE</p>
            <h1>Do not use this form to communicate personal data.</h1>
            {/* <form action="https://formspree.io/f/mvoyevep" method="POST"> */}
            <form action="#" method="POST">
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    name="UserName"
                    class="form-control"
                    placeholder="Your Name*"
                    aria-label="Your Name"
                    autoComplete="off"
                    required
                  />
                </div>
                <div class="col">
                  <input
                    type="number"
                    name="Number"
                    class="form-control"
                    placeholder="Your Phone"
                    aria-label="Your Phone"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <input
                    type="email"
                    name="Email"
                    class="form-control"
                    placeholder="Your Email*"
                    aria-label="Your Email"
                    autoComplete="off"
                    required
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    name="Subject"
                    class="form-control"
                    placeholder="Subject"
                    aria-label="Subject"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div class="form-floating">
                <textarea
                  name="Message"
                  class="form-control"
                  placeholder="Message"
                  id="floatingTextarea"
                ></textarea>
                <label for="floatingTextarea">Message</label>
              </div>
              <div   className="contact-recaptch">
                <ReCAPTCHA
               
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={onChange}
                />
              </div>
              <div className="send-msg">
                <button type="submit" value="Submit" disabled={!verified}>
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="contact-img">
        <img src="https://www.postplanner.com/hs-fs/hubfs/How-to-Contact-Facebook-Support-1.png?noresize&width=980&height=515&name=How-to-Contact-Facebook-Support-1.png" />
      </div>
    </>
  );
};

export default Contact;
