import html2pdf from "html2pdf.js";
import TemplateWedding from "../templates/Template1";
import Template2 from "../templates/Template2";
import "./Preview.css";

function Preview({ biodata, template }) {

  const downloadPDF = () => {

    const element = document.getElementById("biodata-preview");

    // Different settings for Template 1 (single page) vs Template 2 (multi-page)
    const options = template === 1 ? {
      margin: 0,
      filename: "shaadibio-biodata.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        logging: false,
        letterRendering: true
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
        compress: true
      },
      pagebreak: { 
        mode: ['avoid-all', 'css', 'legacy'],
        before: '.page-break-before',
        after: '.page-break-after',
        avoid: '.biodata-container'
      }
    } : {
      // Template 2 - Multi-page settings (let html2pdf auto-paginate)
      margin: 0,
      filename: "shaadibio-biodata.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        logging: false,
        letterRendering: true
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
        compress: true
      },
      pagebreak: { 
        mode: ['avoid-all']
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