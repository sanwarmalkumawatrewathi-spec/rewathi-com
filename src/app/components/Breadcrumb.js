"use client";
import React from "react";

const Breadcrumb = ({ title, subtitle, bgImage }) => {
  return (
    <section
      className="relative w-full h-[280px] md:h-[320px] flex items-center justify-start text-center text-white"
      style={{
        backgroundImage: `url(${bgImage || "/images/breadcrumb-bg.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-2 text-lg">{subtitle}</p>
      </div>
    </section>
    
  );
};

export default Breadcrumb;
