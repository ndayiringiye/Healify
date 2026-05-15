import { useState, useEffect } from "react";
import {
  ChevronDown,
  Clock3,
  Globe,
  Mail,
  MapPin,
  Menu,
  Search,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";
import { GiFlowerStar } from "react-icons/gi";

import logo from "../../public/images/logo.png";

const NavBar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Dark Mode
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Scroll Detection for better sticky effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="w-full font-[Poppins] sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-[#1b3b5a] dark:bg-gray-900 px-5 lg:px-10 py-2.5 hidden lg:flex items-center justify-between">
        <div className="flex items-center gap-7">
          <div className="flex items-center gap-2 text-[#c8dff0] text-[13.5px]">
            <div className="w-[30px] h-[30px] rounded-full bg-[#22bcd4] flex items-center justify-center">
              <Mail size={14} className="text-white" />
            </div>
            <span>NybrHopital@camp.com</span>
          </div>

          <div className="flex items-center gap-2 text-[#c8dff0] text-[13.5px]">
            <div className="w-[30px] h-[30px] rounded-full bg-[#22bcd4] flex items-center justify-center">
              <MapPin size={14} className="text-white" />
            </div>
            <span>36D Street Nyabiheke, Gastibo</span>
          </div>

          <div className="flex items-center gap-2 text-[#c8dff0] text-[13.5px]">
            <div className="w-[30px] h-[30px] rounded-full bg-[#22bcd4] flex items-center justify-center">
              <Clock3 size={14} className="text-white" />
            </div>
            <span>Mon - Fri: 8:00 am - 7:00 pm</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a href="#" className="w-[34px] h-[34px] rounded-full bg-[#22bcd4] hover:bg-[#18a8bf] duration-200 flex items-center justify-center">
            <FaFacebookF size={15} className="text-white" />
          </a>
          <a href="#" className="w-[34px] h-[34px] rounded-full bg-[#22bcd4] hover:bg-[#18a8bf] duration-200 flex items-center justify-center">
            <FaTwitter size={15} className="text-white" />
          </a>
          <a href="#" className="w-[34px] h-[34px] rounded-full bg-[#22bcd4] hover:bg-[#18a8bf] duration-200 flex items-center justify-center">
            <FaLinkedinIn size={15} className="text-white" />
          </a>

          <button className="ml-2 flex items-center gap-1 text-[#c8dff0] text-[13.5px] hover:text-white transition-colors">
            <Globe size={16} />
            <span>Language</span>
            <ChevronDown size={12} />
          </button>

          <button
            onClick={toggleDarkMode}
            className="ml-2 w-9 h-9 flex items-center justify-center text-[#c8dff0] hover:text-white transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? <MdDarkMode size={22} /> : <GiFlowerStar size={22} />}
          </button>
        </div>
      </div>

      {/* Main Navigation - Sticky */}
      <nav className={`bg-white dark:bg-gray-900 h-[82px] px-5 lg:px-10 flex items-center justify-between border-b dark:border-gray-700 transition-all duration-300 ${
        isScrolled ? "shadow-xl" : "shadow-[0_2px_10px_rgba(0,0,0,0.07)]"
      }`}>
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <img
              src={logo}
              alt="Medixi Hospital Logo"
              className="h-14 w-auto max-h-[56px] object-contain transition-all duration-300 group-hover:brightness-110"
            />
          </div>
        </a>

        {/* Menu */}
        <ul className="hidden lg:flex items-center gap-1">
          <li className="relative group">
            <a href="#" className="flex items-center gap-1 px-3.5 py-2.5 text-[15px] font-medium text-[#1b3b5a] dark:text-gray-200 hover:text-[#22bcd4] dark:hover:text-[#22bcd4] duration-200">
              Home <ChevronDown size={13} />
            </a>
            {/* Dropdowns... (kept same) */}
            <div className="absolute top-[calc(100%+4px)] left-0 bg-white dark:bg-gray-800 border border-[#e2edf5] dark:border-gray-700 rounded-md shadow-xl min-w-[170px] overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-200 z-50">
              <a href="#" className="block px-4 py-2.5 text-sm text-[#1b3b5a] dark:text-gray-200 hover:bg-[#f0fafd] dark:hover:bg-gray-700 hover:text-[#22bcd4]">Home v1</a>
              <a href="#" className="block px-4 py-2.5 text-sm text-[#1b3b5a] dark:text-gray-200 hover:bg-[#f0fafd] dark:hover:bg-gray-700 hover:text-[#22bcd4]">Home v2</a>
              <a href="#" className="block px-4 py-2.5 text-sm text-[#1b3b5a] dark:text-gray-200 hover:bg-[#f0fafd] dark:hover:bg-gray-700 hover:text-[#22bcd4]">Home v3</a>
            </div>
          </li>

          <li>
            <a href="#" className="px-3.5 py-2.5 text-[15px] font-medium text-[#1b3b5a] dark:text-gray-200 hover:text-[#22bcd4] duration-200">About</a>
          </li>

          <li className="relative group">
            <a href="#" className="flex items-center gap-1 px-3.5 py-2.5 text-[15px] font-medium text-[#1b3b5a] dark:text-gray-200 hover:text-[#22bcd4] duration-200">
              Pages <ChevronDown size={13} />
            </a>
            <div className="absolute top-[calc(100%+4px)] left-0 bg-white dark:bg-gray-800 border border-[#e2edf5] dark:border-gray-700 rounded-md shadow-xl min-w-[170px] overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-200 z-50">
              <a href="#" className="block px-4 py-2.5 text-sm text-[#1b3b5a] dark:text-gray-200 hover:bg-[#f0fafd] dark:hover:bg-gray-700 hover:text-[#22bcd4]">Team</a>
              <a href="#" className="block px-4 py-2.5 text-sm text-[#1b3b5a] dark:text-gray-200 hover:bg-[#f0fafd] dark:hover:bg-gray-700 hover:text-[#22bcd4]">Pricing</a>
              <a href="#" className="block px-4 py-2.5 text-sm text-[#1b3b5a] dark:text-gray-200 hover:bg-[#f0fafd] dark:hover:bg-gray-700 hover:text-[#22bcd4]">FAQ</a>
            </div>
          </li>

          <li className="relative group">
            <a href="#" className="flex items-center gap-1 px-3.5 py-2.5 text-[15px] font-medium text-[#1b3b5a] dark:text-gray-200 hover:text-[#22bcd4] duration-200">
              Shop <ChevronDown size={13} />
            </a>
            <div className="absolute top-[calc(100%+4px)] left-0 bg-white dark:bg-gray-800 border border-[#e2edf5] dark:border-gray-700 rounded-md shadow-xl min-w-[170px] overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-200 z-50">
              <a href="#" className="block px-4 py-2.5 text-sm text-[#1b3b5a] dark:text-gray-200 hover:bg-[#f0fafd] dark:hover:bg-gray-700 hover:text-[#22bcd4]">Products</a>
              <a href="#" className="block px-4 py-2.5 text-sm text-[#1b3b5a] dark:text-gray-200 hover:bg-[#f0fafd] dark:hover:bg-gray-700 hover:text-[#22bcd4]">Cart</a>
              <a href="#" className="block px-4 py-2.5 text-sm text-[#1b3b5a] dark:text-gray-200 hover:bg-[#f0fafd] dark:hover:bg-gray-700 hover:text-[#22bcd4]">Checkout</a>
            </div>
          </li>

          <li className="relative group">
            <a href="#" className="flex items-center gap-1 px-3.5 py-2.5 text-[15px] font-medium text-[#1b3b5a] dark:text-gray-200 hover:text-[#22bcd4] duration-200">
              Blog <ChevronDown size={13} />
            </a>
            <div className="absolute top-[calc(100%+4px)] left-0 bg-white dark:bg-gray-800 border border-[#e2edf5] dark:border-gray-700 rounded-md shadow-xl min-w-[170px] overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-200 z-50">
              <a href="#" className="block px-4 py-2.5 text-sm text-[#1b3b5a] dark:text-gray-200 hover:bg-[#f0fafd] dark:hover:bg-gray-700 hover:text-[#22bcd4]">Blog Grid</a>
              <a href="#" className="block px-4 py-2.5 text-sm text-[#1b3b5a] dark:text-gray-200 hover:bg-[#f0fafd] dark:hover:bg-gray-700 hover:text-[#22bcd4]">Blog List</a>
              <a href="#" className="block px-4 py-2.5 text-sm text-[#1b3b5a] dark:text-gray-200 hover:bg-[#f0fafd] dark:hover:bg-gray-700 hover:text-[#22bcd4]">Single Post</a>
            </div>
          </li>

          <li>
            <a href="#" className="px-3.5 py-2.5 text-[15px] font-medium text-[#1b3b5a] dark:text-gray-200 hover:text-[#22bcd4] duration-200">Contact</a>
          </li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button className="w-[42px] h-[42px] rounded-full bg-[#1b3b5a] dark:bg-gray-700 hover:bg-[#22bcd4] duration-200 flex items-center justify-center">
            <Search size={18} className="text-white" />
          </button>

          <button className="w-[42px] h-[42px] rounded-full bg-[#1b3b5a] dark:bg-gray-700 hover:bg-[#22bcd4] duration-200 flex items-center justify-center">
            <Menu size={18} className="text-white" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;