import { useState, useImperativeHandle, forwardRef } from "react";
import "./PersonalDetails.css";

const PersonalDetails = forwardRef(({ biodata, setBiodata }, ref) => {

  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    if (!value) {
      return `${name} is required`;
    }
    return "";
  };

  const handleChange = (e) => {

    const { name, value } = e.target;

    setBiodata({
      ...biodata,
      personal: {
        ...biodata.personal,
        [name]: value
      }
    });

    setErrors({
      ...errors,
      [name]: validate(name, value)
    });
  };

  const handleDOB = (e) => {

    const dob = e.target.value;

    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    setBiodata({
      ...biodata,
      personal: {
        ...biodata.personal,
        dob,
        age
      }
    });

    setErrors({
      ...errors,
      dob: validate("Date of Birth", dob)
    });
  };


  const validateAll = () => {

    const newErrors = {};

    Object.entries(biodata.personal).forEach(([key, value]) => {
      if (key !== "age" && !value) {
        newErrors[key] = `${key} is required`;
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  useImperativeHandle(ref, () => ({
    validateAll
  }));


  return (
    <div className="section">

      <h3>Personal Details</h3>

      <div className="form-group">
        <label>Full Name <span className="required">*</span></label>

        <input
          name="name"
          value={biodata.personal.name}
          onChange={handleChange}
          className={errors.name ? "input-error" : ""}
        />

        {errors.name && <p className="error">{errors.name}</p>}
      </div>


      <div className="form-group">
        <label>Gender <span className="required">*</span></label>

        <select
          name="gender"
          value={biodata.personal.gender}
          onChange={handleChange}
          className={errors.gender ? "input-error" : ""}
        >
          <option value="">Select</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        {errors.gender && <p className="error">{errors.gender}</p>}
      </div>


      <div className="form-group">
        <label>Date of Birth <span className="required">*</span></label>

        <input
          type="date"
          value={biodata.personal.dob}
          onChange={handleDOB}
          className={errors.dob ? "input-error" : ""}
        />

        {errors.dob && <p className="error">{errors.dob}</p>}
      </div>


      <div className="form-group">
        <label>Height <span className="required">*</span></label>

        <input
          name="height"
          value={biodata.personal.height}
          onChange={handleChange}
          className={errors.height ? "input-error" : ""}
        />

        {errors.height && <p className="error">{errors.height}</p>}
      </div>


      <div className="form-group">
        <label>Religion <span className="required">*</span></label>

        <input
          name="religion"
          value={biodata.personal.religion}
          onChange={handleChange}
          className={errors.religion ? "input-error" : ""}
        />

        {errors.religion && <p className="error">{errors.religion}</p>}
      </div>


      <div className="form-group">
        <label>Caste <span className="required">*</span></label>

        <input
          name="caste"
          value={biodata.personal.caste}
          onChange={handleChange}
          className={errors.caste ? "input-error" : ""}
        />

        {errors.caste && <p className="error">{errors.caste}</p>}
      </div>

    </div>
  );
});

export default PersonalDetails;