import { useState, forwardRef, useImperativeHandle } from "react";
import "./PhotoUpload.css";

const PhotoUpload = forwardRef(({ biodata, setBiodata }, ref) => {

  const [error, setError] = useState("");

  const validateAll = () => {

    if (!biodata.photo) {
      setError("Photo is required");
      return false;
    }

    setError("");
    return true;
  };

  useImperativeHandle(ref, () => ({
    validateAll
  }));

  const handlePhoto = (e) => {

    const file = e.target.files[0];

    if (file) {

      const imageURL = URL.createObjectURL(file);

      setBiodata({
        ...biodata,
        photo: imageURL
      });

      setError("");
    }
  };

  return (

    <div className="section">

      <h3>Profile Photo <span className="required">*</span></h3>

      <input
        type="file"
        accept="image/*"
        onChange={handlePhoto}
        className={error ? "input-error" : ""}
      />

      {error && <p className="error">{error}</p>}

      {biodata.photo && (
        <div className="photo-preview">
          <img src={biodata.photo} alt="Preview" />
        </div>
      )}

    </div>

  );

});

export default PhotoUpload;