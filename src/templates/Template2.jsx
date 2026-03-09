import "./Template2.css";

function Template2({ biodata }) {
  const { personal, family, education, horoscope, photo } = biodata;

  return (
    <div className="template2-container">
      
      <div className="template2-page page1">
        <div className="hanging-decor left"></div>
        <div className="hanging-decor right"></div>
        
        <h1 className="biodata-title">Bio Data</h1>
        
        <div className="photo-circle-wrapper">
          <div className="floral-frame">
            <div className="flower-decoration top-left"></div>
            <div className="flower-decoration top-right"></div>
            <div className="flower-decoration bottom-left"></div>
            <div className="flower-decoration bottom-right"></div>
          </div>
          {photo ? (
            <img src={photo} alt="Profile" className="circular-photo" />
          ) : (
            <div className="circular-photo-placeholder">Photo</div>
          )}
        </div>
        
        <h2 className="candidate-name">{personal.name || "Your Name"}</h2>
        
        <div className="triangle-pattern"></div>
      </div>

      <div className="template2-page page2">
        <div className="page-content">
          <h2 className="section-heading">Personal Details</h2>
          
          <div className="details-grid">
            <div className="detail-item">
              <span className="label">Name</span>
              <span className="separator">-</span>
              <span className="value">{personal.name || "—"}</span>
            </div>
            
            <div className="detail-item">
              <span className="label">Date of Birth</span>
              <span className="separator">-</span>
              <span className="value">{personal.dob || "—"}</span>
            </div>

            <div className="detail-item">
              <span className="label">Age</span>
              <span className="separator">-</span>
              <span className="value">{personal.age || "—"}</span>
            </div>

            <div className="detail-item">
              <span className="label">Gender</span>
              <span className="separator">-</span>
              <span className="value">{personal.gender || "—"}</span>
            </div>
            
            <div className="detail-item">
              <span className="label">Place of Birth</span>
              <span className="separator">-</span>
              <span className="value">{horoscope.birthPlace || "—"}</span>
            </div>
            
            <div className="detail-item">
              <span className="label">Time of Birth</span>
              <span className="separator">-</span>
              <span className="value">{horoscope.birthTime || "—"}</span>
            </div>
            
            <div className="detail-item">
              <span className="label">Height</span>
              <span className="separator">-</span>
              <span className="value">{personal.height || "—"}</span>
            </div>

            <div className="detail-item">
              <span className="label">Religion</span>
              <span className="separator">-</span>
              <span className="value">{personal.religion || "—"}</span>
            </div>

            <div className="detail-item">
              <span className="label">Caste</span>
              <span className="separator">-</span>
              <span className="value">{personal.caste || "—"}</span>
            </div>

            <div className="detail-item">
              <span className="label">Rashi</span>
              <span className="separator">-</span>
              <span className="value">{horoscope.rashi || "—"}</span>
            </div>
            
            <div className="detail-item">
              <span className="label">Nakshatra</span>
              <span className="separator">-</span>
              <span className="value">{horoscope.nakshatra || "—"}</span>
            </div>

            <div className="detail-item">
              <span className="label">Gotra</span>
              <span className="separator">-</span>
              <span className="value">{horoscope.gotra || "—"}</span>
            </div>

            <div className="detail-item">
              <span className="label">Manglik</span>
              <span className="separator">-</span>
              <span className="value">{horoscope.manglik || "—"}</span>
            </div>
            
            <div className="detail-item">
              <span className="label">Qualification</span>
              <span className="separator">-</span>
              <span className="value">{education.qualification || "—"}</span>
            </div>

            <div className="detail-item">
              <span className="label">College/University</span>
              <span className="separator">-</span>
              <span className="value">{education.college || "—"}</span>
            </div>
            
            <div className="detail-item">
              <span className="label">Profession</span>
              <span className="separator">-</span>
              <span className="value">{education.profession || "—"}</span>
            </div>

            <div className="detail-item">
              <span className="label">Company</span>
              <span className="separator">-</span>
              <span className="value">{education.company || "—"}</span>
            </div>

            <div className="detail-item">
              <span className="label">Income</span>
              <span className="separator">-</span>
              <span className="value">{education.income || "—"}</span>
            </div>

            <div className="detail-item">
              <span className="label">Work Location</span>
              <span className="separator">-</span>
              <span className="value">{education.workLocation || "—"}</span>
            </div>
          </div>
          
          <div className="bottom-flower"></div>
        </div>
      </div>

      <div className="template2-page page3">
        <div className="page-content">
          
          <h2 className="section-heading">Family Details</h2>
          
          <div className="details-grid">
            <div className="detail-item">
              <span className="label">Father's Name</span>
              <span className="separator">-</span>
              <span className="value">{family.fatherName || "—"}</span>
            </div>
            
            <div className="detail-item">
              <span className="label">Father's Occupation</span>
              <span className="separator">-</span>
              <span className="value">{family.fatherOccupation || "—"}</span>
            </div>
            
            <div className="detail-item">
              <span className="label">Mother's Name</span>
              <span className="separator">-</span>
              <span className="value">{family.motherName || "—"}</span>
            </div>
            
            <div className="detail-item">
              <span className="label">Mother's Occupation</span>
              <span className="separator">-</span>
              <span className="value">{family.motherOccupation || "—"}</span>
            </div>

            <div className="detail-item">
              <span className="label">Brothers</span>
              <span className="separator">-</span>
              <span className="value">{family.brothers || "—"}</span>
            </div>

            <div className="detail-item">
              <span className="label">Sisters</span>
              <span className="separator">-</span>
              <span className="value">{family.sisters || "—"}</span>
            </div>

            <div className="detail-item">
              <span className="label">Family Type</span>
              <span className="separator">-</span>
              <span className="value">{family.familyType || "—"}</span>
            </div>
            
            <div className="detail-item">
              <span className="label">Native Place</span>
              <span className="separator">-</span>
              <span className="value">{family.nativePlace || "—"}</span>
            </div>
          </div>
          
          <h2 className="section-heading" style={{marginTop: "40px"}}>Contact Details</h2>
          
          <div className="details-grid">
            <div className="detail-item">
              <span className="label">Contact Number</span>
              <span className="separator">-</span>
              <span className="value">+91 XXXXXXXXXX</span>
            </div>
            
            <div className="detail-item">
              <span className="label">Residential Address</span>
              <span className="separator">-</span>
              <span className="value">{family.nativePlace || "—"}</span>
            </div>
            
            <div className="detail-item">
              <span className="label">Nanihal</span>
              <span className="separator">-</span>
              <span className="value">—</span>
            </div>
          </div>
          
          <div className="bottom-flower-large"></div>
        </div>
      </div>

    </div>
  );
}

export default Template2;