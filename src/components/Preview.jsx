import html2pdf from "html2pdf.js";
import TemplateWedding from "../templates/Template1";
import Template2 from "../templates/Template2";
import "./Preview.css";

function Preview({ biodata, template }) {

  const downloadPDF = () => {

    const element = document.querySelector("#biodata-preview > div");

    const options = {
      margin: 0,
      filename: "shaadibio-biodata.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 3,
        useCORS: true
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait"
      },
      pagebreak: {
        mode: ["css", "legacy"]
      }
    };

    html2pdf().set(options).from(element).save();
  };

  return (

    <div className="preview-wrapper">

      <div className="preview-top">

        <button
          className="download-btn"
          onClick={downloadPDF}
        >
          Download PDF
        </button>

      </div>

      <div id="biodata-preview">

        {template === 1 && (
          <TemplateWedding biodata={biodata} />
        )}

        {template === 2 && (
          <Template2 biodata={biodata} />
        )}

      </div>

    </div>

  );
}

export default Preview;