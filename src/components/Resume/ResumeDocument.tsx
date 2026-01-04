import { resumeData } from "@/data/resumeData";

export const ResumeDocument = () => {
  const { personalInfo, summary, experience, projects, skills, competencies } = resumeData;

  return (
    <div
      id="resume-content"
      style={{
        width: "210mm",
        minHeight: "297mm",
        padding: "12mm 14mm",
        backgroundColor: "#ffffff",
        color: "#1a1a1a",
        fontFamily: "'Segoe UI', 'Arial', sans-serif",
        fontSize: "10pt",
        lineHeight: "1.4",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "16px", borderBottom: "2px solid #d4a853", paddingBottom: "14px" }}>
        <h1
          style={{
            fontSize: "26pt",
            fontWeight: "700",
            color: "#1a1a1a",
            margin: "0 0 4px 0",
            letterSpacing: "1px",
          }}
        >
          {personalInfo.name.toUpperCase()}
        </h1>
        <p
          style={{
            fontSize: "12pt",
            color: "#b8860b",
            fontWeight: "600",
            margin: "0 0 10px 0",
          }}
        >
          {personalInfo.title}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
            fontSize: "9pt",
            color: "#444444",
          }}
        >
          <span>📧 {personalInfo.email}</span>
          <span>📱 {personalInfo.phone}</span>
          <span>📍 {personalInfo.location}</span>
          <span>🔗 {personalInfo.linkedin}</span>
        </div>
      </div>

      {/* Professional Summary */}
      <div style={{ marginBottom: "14px" }}>
        <h2
          style={{
            fontSize: "11pt",
            fontWeight: "700",
            color: "#b8860b",
            borderBottom: "1px solid #e5e5e5",
            paddingBottom: "4px",
            marginBottom: "8px",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          Professional Summary
        </h2>
        <p style={{ margin: 0, textAlign: "justify", color: "#333333" }}>{summary}</p>
      </div>

      {/* Work Experience */}
      <div style={{ marginBottom: "14px" }}>
        <h2
          style={{
            fontSize: "11pt",
            fontWeight: "700",
            color: "#b8860b",
            borderBottom: "1px solid #e5e5e5",
            paddingBottom: "4px",
            marginBottom: "8px",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          Work Experience
        </h2>
        {experience.map((job, index) => (
          <div key={index} style={{ marginBottom: "12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2px" }}>
              <h3 style={{ fontSize: "10.5pt", fontWeight: "700", color: "#1a1a1a", margin: 0 }}>
                {job.title}
              </h3>
              <span style={{ fontSize: "9pt", color: "#666666", fontStyle: "italic" }}>{job.period}</span>
            </div>
            <p style={{ fontSize: "9.5pt", color: "#555555", margin: "0 0 6px 0", fontWeight: "500" }}>
              {job.company}
            </p>
            <ul style={{ margin: 0, paddingLeft: "18px" }}>
              {job.highlights.map((highlight, hIndex) => (
                <li key={hIndex} style={{ marginBottom: "3px", color: "#333333", fontSize: "9.5pt" }}>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Key Projects */}
      <div style={{ marginBottom: "14px" }}>
        <h2
          style={{
            fontSize: "11pt",
            fontWeight: "700",
            color: "#b8860b",
            borderBottom: "1px solid #e5e5e5",
            paddingBottom: "4px",
            marginBottom: "8px",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          Key Projects
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 20px" }}>
          {projects.map((project, index) => (
            <div key={index} style={{ marginBottom: "4px" }}>
              <span style={{ fontWeight: "600", color: "#1a1a1a", fontSize: "9.5pt" }}>{project.name}</span>
              <span style={{ color: "#555555", fontSize: "9pt" }}> — {project.description}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Skills & Competencies - Two Column Layout */}
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "24px" }}>
        {/* Technical Skills */}
        <div>
          <h2
            style={{
              fontSize: "11pt",
              fontWeight: "700",
              color: "#b8860b",
              borderBottom: "1px solid #e5e5e5",
              paddingBottom: "4px",
              marginBottom: "8px",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Technical Skills
          </h2>
          <div style={{ fontSize: "9.5pt" }}>
            <p style={{ margin: "0 0 5px 0" }}>
              <strong style={{ color: "#1a1a1a" }}>Frontend:</strong>{" "}
              <span style={{ color: "#333333" }}>{skills.frontend.join(", ")}</span>
            </p>
            <p style={{ margin: "0 0 5px 0" }}>
              <strong style={{ color: "#1a1a1a" }}>Backend:</strong>{" "}
              <span style={{ color: "#333333" }}>{skills.backend.join(", ")}</span>
            </p>
            <p style={{ margin: "0 0 5px 0" }}>
              <strong style={{ color: "#1a1a1a" }}>E-commerce:</strong>{" "}
              <span style={{ color: "#333333" }}>{skills.ecommerce.join(", ")}</span>
            </p>
            <p style={{ margin: 0 }}>
              <strong style={{ color: "#1a1a1a" }}>Tools:</strong>{" "}
              <span style={{ color: "#333333" }}>{skills.tools.join(", ")}</span>
            </p>
          </div>
        </div>

        {/* Core Competencies */}
        <div>
          <h2
            style={{
              fontSize: "11pt",
              fontWeight: "700",
              color: "#b8860b",
              borderBottom: "1px solid #e5e5e5",
              paddingBottom: "4px",
              marginBottom: "8px",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Core Competencies
          </h2>
          <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "9.5pt" }}>
            {competencies.map((competency, index) => (
              <li key={index} style={{ marginBottom: "3px", color: "#333333" }}>
                {competency}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
