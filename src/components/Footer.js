import React from "react";
import { company } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <a href="#top" className="brand">
          <img src="/assets/anushma-logo.png" alt="Anushma LLC logo" />
          Anushma LLC
        </a>
        <small>
          {company.address} · {company.phone} · {company.email}
        </small>
        <small>© {new Date().getFullYear()} Anushma LLC. Quality you can trust.</small>
      </div>
    </footer>
  );
}
