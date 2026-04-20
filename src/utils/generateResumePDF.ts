import html2pdf from "html2pdf.js";
import { createRoot } from "react-dom/client";
import { ResumeDocument } from "@/components/Resume/ResumeDocument";
import React from "react";

export const generateResumePDF = async (): Promise<void> => {
  // Create a temporary container
  const container = document.createElement("div");
  container.style.position = "absolute";
  container.style.left = "-9999px";
  container.style.top = "0";
  document.body.appendChild(container);

  // Render the resume component
  const root = createRoot(container);
  
  return new Promise((resolve, reject) => {
    root.render(React.createElement(ResumeDocument));

    // Wait for render to complete
    setTimeout(async () => {
      try {
        const resumeElement = container.querySelector("#resume-content") as HTMLElement | null;

        if (!resumeElement) {
          throw new Error("Resume content not found");
        }

        const options = {
          margin: 0,
          filename: "Aravind_B_Nair_Resume.pdf",
          image: { type: "jpeg" as const, quality: 0.98 },
          html2canvas: {
            scale: 2,
            useCORS: true,
            letterRendering: true,
          },
          jsPDF: {
            unit: "mm" as const,
            format: "a4" as const,
            orientation: "portrait" as const,
          },
        };

        await html2pdf().set(options).from(resumeElement).save();

        // Cleanup
        root.unmount();
        document.body.removeChild(container);
        resolve();
      } catch (error) {
        root.unmount();
        document.body.removeChild(container);
        reject(error);
      }
    }, 100);
  });
};
