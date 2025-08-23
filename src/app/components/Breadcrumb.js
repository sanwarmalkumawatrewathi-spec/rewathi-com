import Image from "next/image";

const Breadcrumb = ({ title, subtitle, bgImage }) => {
  return (
    <section
      className="breadcrumb-section"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        minHeight: "338px",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        color: "#fff",
      }}
    >
      <div
        className="breadcrumb-overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark overlay to enhance text readability
        }}
      ></div>
      <div className="breadcrumb-content text-center text-md-start" style={{ position: "relative", zIndex: 1 }}>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "10px",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#ccc",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default Breadcrumb;