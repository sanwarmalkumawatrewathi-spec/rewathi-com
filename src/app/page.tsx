"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import dynamic from "next/dynamic";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Industries from "./pages/Industries";
import Careers from "./pages/Careers";
import Team from "./pages/Team";
import Company from "./pages/Company";
import Stories from "./pages/Stories";
import Solutions from "./pages/Solutions";
import Home from "./pages/Home";
import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";  // AOS styles

import "./assets/css/Home.css"; // your custom css

// Only BrowserRouter should be dynamic
const BrowserRouter = dynamic(
  () => import("react-router-dom").then((mod) => mod.BrowserRouter),
  { ssr: false }
);

import { Routes, Route } from "react-router-dom";

export default function App() {
  const [homeData, setHomeData] = useState<any>(null);

  useEffect(() => {
    // Initialize AOS once
    AOS.init({
      duration: 1000,
      once: true,
    });

    async function fetchHomeData() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/acf/v3/pages/${process.env.NEXT_PUBLIC_HOMEPAGE_ID}`
      );
      const data = await res.json();
      setHomeData(data);
    }
    fetchHomeData();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home homeData={homeData} />} />
          <Route path="/about" element={<About />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/about/careers" element={<Careers />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/company" element={<Company />} />
          <Route path="/success-stories" element={<Stories />} />
          <Route path="/solutions" element={<Solutions />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
