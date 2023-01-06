import React from "react";

const Doctor = () => {
  return (
    <>
      <div className="dr-header">
        <div className="header-contant">
          <h1>Team Member</h1>
          <p>
            Dentist {" > "} Team Members {" > "} Dr. Aarti Chaudhary
          </p>
        </div>
      </div>

      <div className="doctor">
        <div className="doctor-row">
          <div className="doctor-col doctor-col-1">
            <img src="https://sncdentalclinic.com/wp-content/uploads/2020/08/arti-chaudhary.jpg" />
           <div className="doc-content">
           <h1>Dr. Aarti Chaudhary</h1>
            <h6>Oral Health specialist</h6>
            <p>Awarded the Bachlor’s (BDS) degree from the prestigious KLE’s Institute of Dental Sciences, Belgaum, Karnataka, in 1997</p>
           </div>
           <div className="doc-content">
           <h3>Personal Information</h3>
           </div>
           <div className="doc-content">
        <div className="skill"> 
        <h3>skill</h3>
          <div className="rang-slide">
          <label for="customRange3" class="form-label">Oral Ulcers</label>
            <input type="range" class="form-range" min="0" max="5" step="0.4" id="customRange3"></input>
            <label for="customRange3" class="form-label">tobacco lesions</label>
            <input type="range" class="form-range" min="0" max="1" step="0.4" id="customRange3"></input>
          </div>
        </div>
           </div>
          </div>
          <div className="doctor-col doctor-col-2">   
            <ol>
              <li>Awarded the Bachlor’s (BDS) degree from the prestigious KLE’s Institute of Dental Sciences, Belgaum, Karnataka, in 1997</li>
              <li>Awarded the Master’s (MDS) degree from the same institute in the subject of Oral Medicine & Radiology in 2001.</li>
              <li>Has worked in College of Dental Sciences, Rau, Indore in capacity of Sr. Lecturer and at Govt Dental College in capacity of a Reader from 2000 to 2003 qnd 2003 to 2005 respectively.</li>
              <li>Worked at Modern Dental College & research Center in capacity of Professor and Head of Dept for PG studies from 2005 till date.</li>
              <li>Has trained more than 25 PG students in the subject of Oral Medicine & Dental Radiology.</li>
              <li>Exclusively practices as an Oral Physician and is an expert in treating Oral Ulcers, TMJ disorders, Submucous Fibrosis, etc at her private practice since 2001.</li>
              <li>Has recieved an extensive training & certification in 3D imaging in Dentistry and is a Sr. CBCT consultant at Sampurna 3D dental Imagings since 2013.</li>
              <li>Has more than twenty years of academic and clinical experience in the subject.</li>
              <li>Has more than twenty five publications in various International, National & Speciality journals.</li>
              <li>Has delivered numerous guest lectures on topics relevant to UG students, PG students & General Practioners.</li>
              <li>Conducting regular certification courses on various subjects related to oral medicine & maxillofacial radiology.</li>
            <b>List of Workshops & CDE Programs Conducted across India:</b>
            <ul>
              <li>CBCT Imaging in Applications in Dentistry: 16</li>
              <li>CBCT applications in Implant Dentistry: 12</li>
              <li>Oral Medicine Topics: 9</li>
            </ul>
            <li>Is the only lady member in the <b>‘Constitution amendment committee’</b> appointed by the IAOMR academy.</li>
            <li>Was elected as the EC member of the IAOMR academy for the year 2012-13.</li>
            <li>Was the Chairman of the Scientific Committee at the XXI National Conference held at Indore in 2009.</li>
            <li><b>Is one of the editors in the South East Asian region for the new edition of Goaz & white text book.</b></li>
            <li>Has bagged the <b>‘Best article of the year award’</b> for the article titled <b>‘Peripheral Hemangioma of the gingiva – A case report’</b> at the VIth Asian Congress of Oral & Maxillofacial Radiology and 18th National Conference of Indian Academy of Oral Medicine & Radiology in 2006.</li>
            <li>Has presented numerous scientific papers & bagged the best presentation awards during National Conferences at Mumbai in 1997 & Bangalore in 1999 respectively.</li>
            </ol>
          </div>
        </div>

      </div>
    </>
  );
};

export default Doctor;
