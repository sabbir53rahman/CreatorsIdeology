import React from "react";
import { FaInstagram, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-white ">
      <footer className="relative container mx-auto h-auto p-12 lg:p-0 lg:py-[50px] bg-white flex  flex-col items-center font-sans">
        <div className=" w-full flex flex-col justify-between lg:flex-row">
          <div className="sec aboutus lg:flex lg:flex-col mr-8 lg:w-1/3 w-full mb-10 lg:mb-0">
            <h2 className="relative text-black font-bold mb-4">About Us</h2>
            <p className="text-black">
              At "Creators Ideology," we pride ourselves on being a valuable
              partner to brands, offering them strategic and impactful
              influencer marketing solutions.
            </p>
            <ul className="sci flex my-5">
              <li className="list-none">
                <a
                  href="https://instagram.com/creatorsideology?igshid=MzNlNGNkZWQ4Mg=="
                  className=" w-10 h-10 bg-gray-600 flex justify-center text-white items-center mr-2 rounded transition-all duration-500 hover:bg-yellow-400"
                >
                  <FaInstagram />
                </a>
              </li>
              <li className="list-none">
                <a
                  href="https://www.linkedin.com/company/creators-ideology/"
                  className=" w-10 h-10 bg-gray-600 flex justify-center text-white items-center mr-2 rounded transition-all duration-500 hover:bg-yellow-400"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>

          <div className="sec contactBx lg:flex lg:flex-col lg:pl-[150px]  lg:w-1/3 w-full">
            <h2 className="relative text-black font-bold mb-4">Contact Info</h2>
            <ul className="info">
              <li className=" flex mb-4">
                <span className="text-black mr-2">
                <FaMapMarkerAlt className="text-[14px] mt-[5px]" />
                </span>
                <span className="text-black">
                  1 New Layout, <br /> Benin City,
                  <br />
                  Nigeria
                </span>
              </li>
              <li className="flex items-center mb-4">
                <span className="text-black text-lg mr-2">
                <IoMdMail />

                </span>
                <p className=" text-black">
                  <a
                    href="mailto:patners@creatorsideology.com"
                    className="transition-all duration-500 hover:text-gray-400"
                  >
                    Patners@creatorsideology.com
                  </a>
                </p>
              </li>
            </ul>
          </div>

          <div className="sec quickLinks lg:flex lg:flex-col lg:pl-[200px] lg:w-1/3 w-full mb-10 lg:mb-0">
            <h2 className="relative text-black font-bold mb-4">Quick Links</h2>
            <ul>
              <li className="list-none mb-2">
                <Link
                  to="/"
                  className="text-black transition-all duration-300 hover:text-gray-400 "
                >
                  Home
                </Link>
              </li>
              <li className="list-none mb-2">
                <Link
                  to="/creator"
                  className="text-black transition-all duration-300 hover:text-gray-400"
                >
                  Creators
                </Link>
              </li>
              <li className="list-none mb-2">
                <Link
                  to="/study"
                  className="text-black transition-all duration-300 hover:text-gray-400"
                >
                  Case Study
                </Link>
              </li>
              <li className="list-none mb-2">
                <Link
                  to="/contact"
                  className="text-black transition-all duration-300 hover:text-gray-400"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full bg-white p-2 pt-[40px] text-center text-black">
          <p>Copyright &copy; 2023 Creators Ideology. All Right Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
