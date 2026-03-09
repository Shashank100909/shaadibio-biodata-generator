import { useState, forwardRef, useImperativeHandle } from "react";
import "./EducationDetails.css";

const EducationDetails = forwardRef(({ biodata, setBiodata }, ref) => {

  const [errors, setErrors] = useState({});

  // Helper function to convert camelCase to proper labels
  const formatLabel = (field) => {
    const labels = {
      qualification: "Qualification",
      college: "College/University",
      profession: "Profession",
      company: "Company/Organization",
      income: "Annual Income",
      workLocation: "Work Location"
    };
    return labels[field] || field;
  };

  const validateAll = () => {

    const newErrors = {};

    Object.entries(biodata.education).forEach(([key, value]) => {
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
      education: {
        ...biodata.education,
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

      <h3>Education & Profession</h3>

      {Object.keys(biodata.education).map((field) => (
        <div className="form-group" key={field}>
          <label>
            {formatLabel(field)} <span className="required">*</span>
          </label>

          <input
            name={field}
            value={biodata.education[field]}
            onChange={handleChange}
            className={errors[field] ? "input-error" : ""}
          />

          {errors[field] && <p className="error">{errors[field]}</p>}
        </div>
      ))}

    </div>
  );

});

export default EducationDetails;