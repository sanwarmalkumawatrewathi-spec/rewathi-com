"use client";
import dynamic from "next/dynamic";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";

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
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
