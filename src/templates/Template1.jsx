import "./Template1.css";

function Template1({ biodata }) {
  const { personal, family, education, horoscope, photo } = biodata;

  return (
    <div className="biodata-container">
      <div className="corner-decoration top-left"></div>
      <div className="corner-decoration top-right"></div>
      <div className="corner-decoration bottom-left"></div>
      <div className="corner-decoration bottom-right"></div>

      <div className="biodata-header">
        <div className="ganesh-symbol">ॐ</div>
        <div className="subtitle">|| श्री गणेशाय नमः ||</div>
      </div>

      <div className="biodata-content">
        
        <div className="content-row">
          <div className="left-column">
            <h3 className="section-title">PERSONAL DETAILS</h3>
            
            <div className="detail-row">
              <span className="detail-label">Name</span>
              <span className="detail-colon">:</span>
              <span className="detail-value">{personal.name || "—"}</span>
            </div>

            <div className="detail-row">
              <span className="detail-label">Date of Birth</span>
              <span className="detail-colon">:</span>
              <span className="detail-value">{personal.dob || "—"}</span>
            </div>

            <div className="detail-row">
              <span className="detail-label">Time of Birth</span>
              <span className="detail-colon">:</span>
              <span className="detail-value">{horoscope.birthTime || "—"}</span>
            </div>

            <div className="detail-row">
              <span className="detail-label">Place of Birth</span>
              <span className="detail-colon">:</span>
              <span className="detail-value">{horoscope.birthPlace || "—"}</span>
            </div>

            <div className="detail-row">
              <span className="detail-label">Age</span>
              <span className="detail-colon">:</span>
              <span className="detail-value">{personal.age || "—"}</span>
            </div>

            <div className="detail-row">
              <span className="detail-label">Height</span>
              <span className="detail-colon">:</span>
              <span className="detail-value">{personal.height || "—"}</span>
            </div>

            <div className="detail-row">
              <span className="detail-label">Rashi</span>
              <span className="detail-colon">:</span>
              <span className="detail-value">{horoscope.rashi || "—"}</span>
            </div>

            <div className="detail-row">
              <span className="detail-label">Nakshatra</span>
              <span className="detail-colon">:</span>
              <span className="detail-value">{horoscope.nakshatra || "—"}</span>
            </div>

            <div className="detail-row">
              <span className="detail-label">Religion</span>
              <span className="detail-colon">:</span>
              <span className="detail-value">{personal.religion || "—"}</span>
            </div>

            <div className="detail-row">
              <span className="detail-label">Caste</span>
              <span className="detail-colon">:</span>
              <span className="detail-value">{personal.caste || "—"}</span>
            </div>

            <div className="detail-row">
              <span className="detail-label">Gotra</span>
              <span className="detail-colon">:</span>
              <span className="detail-value">{horoscope.gotra || "—"}</span>
            </div>

            <div className="detail-row">
              <span className="detail-label">Manglik</span>
              <span className="detail-colon">:</span>
              <span className="detail-value">{horoscope.manglik || "—"}</span>
            </div>

            <div className="detail-row">
              <span className="detail-label">Education</span>
              <span className="detail-colon">:</span>
              <span className="detail-value">{education.qualification || "—"}</span>
            </div>

            <div className="detail-row">
              <span className="detail-label">Work</span>
              <span className="detail-colon">:</span>
              <span className="detail-value">{education.profession || "—"}</span>
            </div>
          </div>

          <div className="right-column">
            {photo ? (
              <div className="photo-frame">
                <img src={photo} alt="Profile" />
              </div>
            ) : (
              <div className="photo-frame photo-placeholder">
                <span>Photo</span>
              </div>
            )}
          </div>
        </div>

        <div className="section-divider"></div>
        
        <h3 className="section-title">FAMILY DETAILS</h3>
        
        <div className="detail-row">
          <span className="detail-label">Father's Name</span>
          <span className="detail-colon">:</span>
          <span className="detail-value">{family.fatherName || "—"}</span>
        </div>

        <div className="detail-row">
          <span className="detail-label">Father's Occupation</span>
          <span className="detail-colon">:</span>
          <span className="detail-value">{family.fatherOccupation || "—"}</span>
        </div>

        <div className="detail-row">
          <span className="detail-label">Mother's Name</span>
          <span className="detail-colon">:</span>
          <span className="detail-value">{family.motherName || "—"}</span>
        </div>

        <div className="detail-row">
          <span className="detail-label">Mother's Occupation</span>
          <span className="detail-colon">:</span>
          <span className="detail-value">{family.motherOccupation || "—"}</span>
        </div>

        <div className="detail-row">
          <span className="detail-label">Siblings</span>
          <span className="detail-colon">:</span>
          <span className="detail-value">
            {family.brothers && family.sisters 
              ? `${family.brothers} Brother(s), ${family.sisters} Sister(s)`
              : "—"}
          </span>
        </div>

        <div className="section-divider"></div>
        
        <h3 className="section-title">CONTACT DETAILS</h3>
        
        <div className="detail-row">
          <span className="detail-label">Contact Person</span>
          <span className="detail-colon">:</span>
          <span className="detail-value">{family.fatherName || "—"}</span>
        </div>

        <div className="detail-row">
          <span className="detail-label">Contact Number</span>
          <span className="detail-colon">:</span>
          <span className="detail-value">+91 XXXXXXXXXX</span>
        </div>

        <div className="detail-row">
          <span className="detail-label">Email ID</span>
          <span className="detail-colon">:</span>
          <span className="detail-value">contact@example.com</span>
        </div>

        <div className="detail-row">
          <span className="detail-label">Residential Address</span>
          <span className="detail-colon">:</span>
          <span className="detail-value">{family.nativePlace || "—"}</span>
        </div>
      </div>
    </div>
  );
}

export default Template1;