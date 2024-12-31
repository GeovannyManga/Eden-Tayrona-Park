"use client";

import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center">
        <p className="text-center text-sm">&copy; {currentYear} Eden Tayrona Park. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
