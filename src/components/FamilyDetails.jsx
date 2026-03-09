import { useState, forwardRef, useImperativeHandle } from "react";
import "./FamilyDetails.css";

const FamilyDetails = forwardRef(({ biodata, setBiodata }, ref) => {

  const [errors, setErrors] = useState({});

  // Helper function to convert camelCase to proper labels
  const formatLabel = (field) => {
    const labels = {
      fatherName: "Father Name",
      fatherOccupation: "Father Occupation",
      motherName: "Mother Name",
      motherOccupation: "Mother Occupation",
      brothers: "Brothers",
      sisters: "Sisters",
      familyType: "Family Type",
      nativePlace: "Native Place"
    };
    return labels[field] || field;
  };

  const validateAll = () => {

    const newErrors = {};

    Object.entries(biodata.family).forEach(([key, value]) => {
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
      family: {
        ...biodata.family,
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

      <h3>Family Details</h3>

      {Object.keys(biodata.family).map((field) => (
        <div className="form-group" key={field}>

          <label>
            {formatLabel(field)} <span className="required">*</span>
          </label>

          <input
            name={field}
            value={biodata.family[field]}
            onChange={handleChange}
            className={errors[field] ? "input-error" : ""}
          />

          {errors[field] && <p className="error">{errors[field]}</p>}

        </div>
      ))}

    </div>
  );

});

export default FamilyDetails;