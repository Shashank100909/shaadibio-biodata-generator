import { useState, forwardRef, useImperativeHandle } from "react";
import "./HoroscopeDetails.css";

const HoroscopeDetails = forwardRef(({ biodata, setBiodata }, ref) => {

  const [errors, setErrors] = useState({});

  // Helper function to convert camelCase to proper labels
  const formatLabel = (field) => {
    const labels = {
      rashi: "Rashi (Moon Sign)",
      nakshatra: "Nakshatra (Birth Star)",
      gotra: "Gotra",
      manglik: "Manglik Status",
      birthPlace: "Birth Place",
      birthTime: "Birth Time"
    };
    return labels[field] || field;
  };

  const validateAll = () => {

    const newErrors = {};

    Object.entries(biodata.horoscope).forEach(([key, value]) => {
      if (!value) {
        newErrors[key] = `${formatLabel(key)} is required`;
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  useImperativeHandle(ref, () => ({
    validateAll
  }));

  const handleChange = (e) => {

    const { name, value } = e.target;

    setBiodata({
      ...biodata,
      horoscope: {
        ...biodata.horoscope,
        [name]: value
      }
    });

    setErrors({
      ...errors,
      [name]: value ? "" : `${formatLabel(name)} is required`
    });
  };

  return (
    <div className="section">

      <h3>Horoscope Details</h3>

      {Object.keys(biodata.horoscope).map((field) => (
        <div className="form-group" key={field}>

          <label>
            {formatLabel(field)} <span className="required">*</span>
          </label>

          {field === "manglik" ? (
            <select
              name={field}
              value={biodata.horoscope[field]}
              onChange={handleChange}
              className={errors[field] ? "input-error" : ""}
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Anshik">Anshik (Partial)</option>
            </select>
          ) : field === "birthTime" ? (
            <input
              type="time"
              name={field}
              value={biodata.horoscope[field]}
              onChange={handleChange}
              className={errors[field] ? "input-error" : ""}
            />
          ) : (
            <input
              name={field}
              value={biodata.horoscope[field]}
              onChange={handleChange}
              className={errors[field] ? "input-error" : ""}
            />
          )}

          {errors[field] && <p className="error">{errors[field]}</p>}

        </div>
      ))}

    </div>
  );

});

export default HoroscopeDetails;