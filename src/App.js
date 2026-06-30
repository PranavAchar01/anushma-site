import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Stats from "./components/Stats";
import Categories from "./components/Categories";
import Showcase from "./components/Showcase";
import Products from "./components/Products";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <div className="app">
      <Preloader />

      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          transformOrigin: "0%",
          scaleX,
          background: "var(--blue)",
          zIndex: 60,
        }}
      />

      <Navbar />

      <main className="content">
        <Hero />
        <Marquee />
        <Stats />
        <Categories />
        <Showcase />
        <Products />
        <Features />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
