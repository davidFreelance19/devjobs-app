import React from "react";

const Trabajo = ({ trabajo }) => {
  return (
    <blockquote key={trabajo.id} className="card">
      <div
        className="container-logo"
        style={{
          backgroundImage: `url(${import.meta.env.VITE_DB}/src${trabajo.logo})`,
          backgroundColor: `${trabajo.logoBackground}`,
        }}
      ></div>
      <div style={{ display: "flex", alignItems: "center", gap: ".6rem" }}>
        <p>{trabajo.postedAt}</p>
        <div
          style={{
            width: "4px",
            height: "4px",
            borderRadius: "100%",
            backgroundColor: "#000",
          }}
        ></div>
        <p>{trabajo.contract}</p>
      </div>
      <h3>{trabajo.position}</h3>
      <p>{trabajo.company}</p>
      <p style={{ color: "#5964e0", fontWeight: "bold", alignSelf: "end" }}>
        {trabajo.location}
      </p>
    </blockquote>
  );
};

export default Trabajo;
