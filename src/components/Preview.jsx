import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import TemplateWedding from "../templates/Template1";
import Template2 from "../templates/Template2";
import "./Preview.css";

function Preview({ biodata, template }) {

  const downloadPDF = async () => {
    let pages = document.querySelectorAll("#biodata-preview [class*='-page']");

    if (pages.length === 0) {
      pages = document.querySelectorAll("#biodata-preview > div");
    }
    const pdf = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });

    for (let i = 0; i < pages.length; i++) {
      const canvas = await html2canvas(pages[i], {
        scale: 3,
        useCORS: true,
        width: pages[i].offsetWidth,
        height: pages[i].offsetHeight,
      });

      const imgData = canvas.toDataURL("image/jpeg", 1.0);

      if (i > 0) pdf.addPage();
      pdf.addImage(imgData, "JPEG", 0, 0, 210, 297);
    }

    pdf.save("shaadibio-biodata.pdf");
  };

  return (
    <div className="preview-wrapper">
      <div className="preview-top">
        <button className="download-btn" onClick={downloadPDF}>
          Download PDF
        </button>
      </div>
      <div id="biodata-preview">
        {template === 1 && <TemplateWedding biodata={biodata} />}
        {template === 2 && <Template2 biodata={biodata} />}
      </div>
    </div>
  );
}

export default Preview;