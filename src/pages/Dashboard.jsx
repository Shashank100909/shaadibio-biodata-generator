import { useState, useRef } from "react";

import PersonalDetails from "../components/PersonalDetails";
import FamilyDetails from "../components/FamilyDetails";
import EducationDetails from "../components/EducationDetails";
import HoroscopeDetails from "../components/HoroscopeDetails";
import PhotoUpload from "../components/PhotoUpload";
import Preview from "../components/Preview";

import "./Dashboard.css";

function Dashboard() {

  const [step, setStep] = useState(1);

  const photoRef = useRef(null);
  const personalRef = useRef(null);
  const familyRef = useRef(null);
  const educationRef = useRef(null);
  const horoscopeRef = useRef(null);

  const [biodata, setBiodata] = useState({

    photo: "",

    personal: {
      name: "",
      gender: "",
      dob: "",
      age: "",
      height: "",
      religion: "",
      caste: ""
    },

    family: {
      fatherName: "",
      fatherOccupation: "",
      motherName: "",
      motherOccupation: "",
      brothers: "",
      sisters: "",
      familyType: "",
      nativePlace: ""
    },

    education: {
      qualification: "",
      college: "",
      profession: "",
      company: "",
      income: "",
      workLocation: ""
    },

    horoscope: {
      rashi: "",
      nakshatra: "",
      gotra: "",
      manglik: "",
      birthPlace: "",
      birthTime: ""
    }

  });

  const [template, setTemplate] = useState(1);


  const nextStep = () => {

    if (step === 1 && !photoRef.current.validateAll()) return;

    if (step === 2 && !personalRef.current.validateAll()) return;

    if (step === 3 && !familyRef.current.validateAll()) return;

    if (step === 4 && !educationRef.current.validateAll()) return;

    if (step === 5 && !horoscopeRef.current.validateAll()) return;

    setStep((prev) => prev + 1);
  };


  const prevStep = () => {
    setStep((prev) => prev - 1);
  };


  const renderStep = () => {

    switch (step) {

      case 1:
        return (
          <PhotoUpload
            ref={photoRef}
            biodata={biodata}
            setBiodata={setBiodata}
          />
        );

      case 2:
        return (
          <PersonalDetails
            ref={personalRef}
            biodata={biodata}
            setBiodata={setBiodata}
          />
        );

      case 3:
        return (
          <FamilyDetails
            ref={familyRef}
            biodata={biodata}
            setBiodata={setBiodata}
          />
        );

      case 4:
        return (
          <EducationDetails
            ref={educationRef}
            biodata={biodata}
            setBiodata={setBiodata}
          />
        );

      case 5:
        return (
          <HoroscopeDetails
            ref={horoscopeRef}
            biodata={biodata}
            setBiodata={setBiodata}
          />
        );

      default:
        return null;
    }

  };


  return (

    <div className="dashboard">

      <div className="form-section">

        <h2>Create Biodata</h2>

        <div className="stepper">

          <div
            className={step === 1 ? "step active" : "step"}
            onClick={() => setStep(1)}
          >
            Photo
          </div>

          <div
            className={step === 2 ? "step active" : "step"}
            onClick={() => setStep(2)}
          >
            Personal
          </div>

          <div
            className={step === 3 ? "step active" : "step"}
            onClick={() => setStep(3)}
          >
            Family
          </div>

          <div
            className={step === 4 ? "step active" : "step"}
            onClick={() => setStep(4)}
          >
            Education
          </div>

          <div
            className={step === 5 ? "step active" : "step"}
            onClick={() => setStep(5)}
          >
            Horoscope
          </div>

        </div>

        {renderStep()}

        <div className="step-buttons">

          {step > 1 && (
            <button
              className="back-btn"
              onClick={prevStep}
            >
              Back
            </button>
          )}

          {step < 5 && (
            <button
              className="next-btn"
              onClick={nextStep}
            >
              Next
            </button>
          )}

        </div>

      </div>


      <div className="preview-section">

        <div className="preview-header">

          <h3>Preview</h3>

          <div className="template-switch">

            <button 
              className={template === 1 ? "active" : ""}
              onClick={() => setTemplate(1)}
            >
              Template 1
            </button>

            <button 
              className={template === 2 ? "active" : ""}
              onClick={() => setTemplate(2)}
            >
              Template 2
            </button>

          </div>

        </div>

        <Preview
          biodata={biodata}
          template={template}
        />

      </div>

    </div>

  );

}

export default Dashboard;