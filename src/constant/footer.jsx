import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-12 mt-20">
      {/* TOP GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        <div>
          <h3 className="font-semibold mb-4">COMPANY</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li>About Us</li>
            <li>Our Vision</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">SERVICES</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Projects</li>
            <li>Consulting</li>
            <li>Development</li>
            <li>Support</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">SUPPORT</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">FOLLOW US</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="w-full h-[1px] bg-white/20 mb-8"></div>

      {/* BOTTOM SECTION */}
      <div className="flex flex-col md:flex-row md:justify-between gap-4 text-sm opacity-70">
        <p>© 2025 AT Property Development. All rights reserved.</p>

        <div className="flex gap-6">
          <p>Privacy Policy</p>
          <p>Terms</p>
          <p>Cookies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
