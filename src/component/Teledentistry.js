import React from "react";

const Teledentistry = () => {
    return (
        <>
            <div className="dr-header">
                <div className="header-contant">
                    <h1>Teledentistry</h1>
                    <p>Dentist {" > "} Teledentistry</p>
                </div>
            </div>

            <div className="diab-cont">
                <p>
                    Through our teledentistry capabilities, you can easily set up a video
                    conference with us on Demand from the comfort of your own home.
                </p>
                <p>
                    We Dentists, in turn, have the ability to understand your dental
                    complaint, prescribe, medicate, and see the your progress virtually
                    through video conferencing. Our teledentistry service puts the power
                    in the hands of the users to get the help they need, when they need
                    it.
                </p>
            </div>

            <div className="teledent">
                <p>You can connect with us in 3 easy steps:</p>
                <ol>
                    <li>
                        <b>
                            Register with us and book an appointment through our website/ on
                            whatsapp.
                        </b>
                    </li>
                    <li>
                        <b>
                            Have a video conferencing with us to explain your oral complaint.
                        </b>
                    </li>
                    <li>
                        <b>Get a prescription and guidance on follow up.</b>
                    </li>
                </ol>
            </div>

            <div className="tele-bottom">
                <h6>Common Dental Complaints best managed by Teledentistry:</h6>
                <ol>
                    <li>General Oral/ Dental Checkup in emergencies.</li>
                    <li>Consultation for toothache, bad breath, Oral Hygiene instructions.</li>
                    <li>Treatment of Oral Ulcers.</li>
                    <li>Oral Cancer Screening.</li>
                    <li>Treatment of facial pains & TM Joint pain.</li>
                    <li>Tobacco Cessation consultation.</li>
                    <li>Diabetic Dental Consultation(Burning Mouths, Dry Mouths and bad breath)</li>
                    <li>Consultation before and after Oral Cancer treatment.</li>
                    <li>Any other Dental Complaints.</li>
                </ol>

            </div>


            <div className="tele-cont">
                <div className="tele-cont-row">
                        <h1>Contact Us</h1>
                        <div class="row">
                            <div class="col">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Your Name*"
                                    aria-label="Your Name"
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
                            <button>SEND MESSAGE</button>
                        </div>
                    </div>
            </div>

        </>
    );
};

export default Teledentistry;
