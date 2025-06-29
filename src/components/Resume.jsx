const ResumeDownload = () => {
  return (
    <p>
      Download my resume:{" "}
      <a 
        href="/PDFs/Ali Keshavarzi resume.pdf" 
        download 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Resume PDF
      </a>
    </p>
  );
};

export default ResumeDownload;