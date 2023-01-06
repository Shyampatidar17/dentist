import React from "react";

const Home = () => {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="6000">
            <img
              src="https://img.freepik.com/free-photo/dentist-doing-check-up-patient_23-2149206225.jpg?w=2000"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img
              src="https://thumbs.dreamstime.com/b/young-girl-having-dental-check-up-macro-close-woman-clinic-43299913.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img
              src="https://img.freepik.com/premium-photo/young-female-patient-with-pretty-smile-examining-dental-inspection-dentist-clinic-healthy-teeth-medicine-stomatology-concept_170532-3978.jpg?w=2000"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="snc">
        <div className="snc-row">
          <div className="snc-col">
            <h1>Snc Speciality Dental Clinic</h1>
            <p>
              Snc Speciality Dental Clinic since its inception in 2000 has been
              at the forefront of Dental Healthcare, committed to providing
              world-class dental treatment at affordable rates. The clinic aims
              at offering different specialties of dentistry like, Endodontics,
              Orthodontics, Periodontics, Prosthodontics, Cosmetic Dentistry and
              Restorative Dentistry all under one roof.
            </p>
            <p>
              It is located on the first floor of Shreeji Towers, opp HDFC bank
              on the main street of Jawhar Marg in the heart of Indore city. The
              Clinic space measures 600sq feet ( carpet Area). There is ample
              parking space in front of the building. The clinic timings are
              from 10:30AM to 2:30PM & 5:30PM to 8:30PM. On Sunday’s the
              patients are treated by appointments only.
            </p>
          </div>
          <div className="snc-col">
            <img src="https://sncdentalclinic.com/wp-content/uploads/2020/09/smile-n-care-speciality-dental-clinic-indore.jpg" />
          </div>
        </div>
      </div>

      <div className="mission">
        <div className="mission-row">
          <div className="mission-col">
            <img src="https://sncdentalclinic.com/wp-content/uploads/2020/08/Smile-n-Care.jpeg" />
          </div>
          <div className="mission-col">
            <h1>Our Mission</h1>
            <li>Treating the dental diseases</li>
            <li>Creating awareness about Dental & Oral Health</li>
            <li>Educate people about importance of Oral Health</li>
            <li>Preventing future Oral health problems</li>
            <li>Creating confident & extremely satisfied patients</li>
            <li>Creating enthusiastic & dedicated staffs</li>
          </div>
        </div>
      </div>

      <div className="service">
        <div className="service-row">
          <div className="service-col">
            <h1>Specialised Dental Services</h1>
            <p>
              We are also trained & committed to provide specialised state of
              the art care for patients with special dental care needs.
            </p>
            <div className="ulc-row">
              <div className="ulc-col">
             <div>
             <i class="fa-solid fa-tooth"></i>
                <span>Oral screening of precancer ulcers</span>
             </div>
             <div>
             <i class="fa-solid fa-tooth"></i>
                <span>Tobacco habit cessation</span>
             </div>
             <div>
             <i class="fa-solid fa-tooth"></i>
                <span>Dental treatment before & after oral cancer</span>
             </div>
              </div>
              <div className="ulc-col">
              <div>
             <i class="fa-solid fa-tooth"></i>
                <span>Treatment of all types of oral ulcers</span>
             </div>
             <div>
             <i class="fa-solid fa-tooth"></i>
                <span>Treatment of diahetic mouth</span>
             </div>
             <div>
             <i class="fa-solid fa-tooth"></i>
                <span>Treatment of head, neck and TM joint pains</span>
             </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="appoint">
        <div className="appoint-row">
          <div className="appoint-col">
            <p>GET APPOINTMENT</p>
            <h1>Get the right Dentist Care Book with your Doctor</h1>
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Name*"
                  aria-label="Your Name"
                  required
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Phone Number"
                  aria-label="Phone Number"
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Email*"
                  aria-label="Your Email"
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Subject"
                  aria-label="Subject"
                />
              </div>
            </div>
            <div class="form-floating">
              <textarea
                class="form-control"
                placeholder="Message"
                id="floatingTextarea"
              
              ></textarea>
              <label for="floatingTextarea">Message</label>
            </div>
            <div className="send-msg">
              <button type="submit">SEND MESSAGE</button>
            </div>
          </div>
          <div className="appoint-col appoint-col-1">
            <img src="https://dentiq-demo.pbminfotech.com/datasite/wp-content/uploads/sites/6/2018/12/img-03.jpg?id=12125"/>
            <div className="img-cont">
            <i class="fa-solid fa-truck-medical"></i>
              <div>
              <p>SPECIAL OFFER</p>
              <h1>Get a free dental check-up</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
