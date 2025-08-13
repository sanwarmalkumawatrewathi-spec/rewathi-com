"use client";
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



// Only BrowserRouter should be dynamic
const BrowserRouter = dynamic(
  () => import("react-router-dom").then((mod) => mod.BrowserRouter),
  { ssr: false }
);

import { Routes, Route } from "react-router-dom";

export default function Home() {
  return (
    <BrowserRouter>
      <Header />
      <main style={{ padding: "20px" }}>
        <Routes>
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
