import './navbar.css'
import { useState } from "react";
import { Menu, Close,  ArrowDropDown ,Explore,Person } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LogoIcon from "./Logo.png";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown

  const navItems = [
    { name: "Website Name", path: "/", icon: null}, // Changed "Home" to "Website Name"
    { name: "Σχετικά με Εμάς", path: "/AboutUs", icon:  <Explore className="text-gray-500" />},
    { name: "Βιογραφικό", path: "/bio", icon: <Person className="text-gray-500" /> },
  ];

  const WevsiteName="Αθανάσιος Δάλλας ψυχολόγος";

  return (
    <header className=" w-full fixed top-0 left-0  z-50">
      <nav className="fixed top-[2%] left-1/2 transform -translate-x-1/2 w-[80%] md:w-[80%] bg-white rounded-2xl shadow-lg border border-gray-200 z-80 h-15 flex items-center px-6">
        {/* Desktop Menu */}
        <ul className="hidden md:flex w-full items-center justify-between">
         
          
          {/* Website Name on the left */}
          <li  className="flex items-center space-x-2">
          <img src={LogoIcon} alt="Icon Description" width="42" height="42"></img>
            <Link
              to="/"
              className="transition-all duration-300 ease-in-out text-gray-500 hover:text-gray-700"
            >
            
              {WevsiteName}
             
              
            </Link>
          </li>

          {/* Other Menu Items on the right */}
          <div className="flex space-x-6 ml-auto">
            {navItems.slice(1).map((item) => ( // Excluding the first item (Website Name)
              <li key={item.name} className="flex items-center space-x-2">
                {item.icon && <span>{item.icon}</span>}
                <Link
                  to={item.path}
                  className="transition-all duration-300 ease-in-out text-gray-500 hover:text-gray-700"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Dropdown Link */}
            <li className="relative flex items-center space-x-2" onClick={() => setIsDropdownOpen(!isDropdownOpen)}> 
             
              <span className="transition-all duration-300 ease-in-out text-gray-500 cursor-pointer hover:text-gray-700">
                Παροχές Υπηρεσιών
              </span>
              <a className="text-gray-500">
                <ArrowDropDown  />
              </a>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-full left-0 w-40 bg-white border border-gray-200 shadow-lg rounded-lg mt-2"
                >
                  <ul>
                    <li>
                    <Link
                        to="/PersonalCounseling"
                        className="block px-4 py-2 text-gray-500 hover:text-gray-700"
                      >
                        Ατομική Συμβουλευτική
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/PersonalTherapy"
                        className="block px-4 py-2 text-gray-500 hover:text-gray-700"
                      >
                        Ατομική Ψυχοθεραπεία
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/CouplesTherapy"
                        className="block px-4 py-2 text-gray-500 hover:text-gray-700"
                      >
                        Θεραπεία Ζεύγους
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ParentalCounseling"
                        className="block px-4 py-2 text-gray-500 hover:text-gray-700"
                      >
                        Συμβουλευτική Γονέων
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/AdolescentTherapy"
                        className="block px-4 py-2 text-gray-500 hover:text-gray-700"
                      >
                        Θεραπεία Εφήβων
                      </Link>
                    </li>
                  </ul>
                </motion.div>
              )}
            </li>
            <li className="flex items-center space-x-2">
              <Link
                to="/ScheduleMeeting"
                className="transition-all duration-300 ease-in bg-teal-400 text-gray-800 font-semibold py-2 px-6 rounded-full hover:bg-teal-500 hover:text-white shadow-lg"
              >
                Κλείσε Online Συνεδρία
              </Link>
            </li>
          </div>
        </ul>
        {/* Mobile Menu Button */}
        <li className="md:hidden ml-auto flex items-center space-x-1">
            <Link
              to="/"
              className="transition-all duration-300 ease-in-out text-gray-500 hover:text-gray-700 text-xs"
            >
              {WevsiteName}
            </Link>
            
        </li>
        <li className=" md:hidden ml-auto flex items-center space-x-2">
              <Link
                to="/ScheduleMeeting"
                className="transition-all duration-300 ease-in bg-teal-400 text-gray-800 font-semibold text-xs py-1 px-2 rounded-full hover:bg-teal-500 hover:text-white shadow-lg"
              >
                Κλείσε Online Συνεδρία
              </Link>
            </li>
        <button className="md:hidden ml-auto" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <Close fontSize="large" /> : <Menu fontSize="large" />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          className="fixed top-[10%] left-1/2 transform -translate-x-1/2 w-[80%] bg-white p-4 rounded-2xl shadow-lg md:hidden"
        >
          <ul className="space-y-4 text-center">
            {/* Always show Website Name */}
            <li className="relative flex items-center justify-center space-x-2">
            <Link
              to="/"
              className="transition-all duration-100 ease-in-out text-gray-500 hover:text-gray-700"
            >
              Home
            </Link>
          </li>
          <li>
              <Link
                to="/ScheduleMeeting"
                className="block px-4 py-2 text-gray-500 hover:text-gray-700"
              >
                Κλείσε Online Συνεδρία 
              </Link>
            </li>
            {/* Other Links */}
            {navItems.slice(1).map((item) => (
              <li key={item.name} className="flex items-center justify-center space-x-2">
                {item.icon && <span>{item.icon}</span>}
                <Link
                  to={item.path}
                  className="block p-2 transition-all duration-300 ease-in-out text-gray-500 hover:text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {/* Mobile Dropdown */}
            <li className="relative flex items-center justify-center space-x-2" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <span className="text-gray-500">
                <ArrowDropDown  />
              </span>
              <span className="transition-all duration-300 ease-in-out text-gray-500 cursor-pointer hover:text-gray-700">
                Παροχές Υπηρεσιών
              </span>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-full left-0 w-40 bg-white border border-gray-200 shadow-lg rounded-lg mt-2"
                >
                  <ul>
                  <li>
                      <Link
                        to="/PersonalCounseling"
                        className="block px-4 py-2 text-gray-500 hover:text-gray-700"
                      >
                        Ατομική Συμβουλευτική
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/PersonalTherapy"
                        className="block px-4 py-2 text-gray-500 hover:text-gray-700"
                      >
                        Ατομική Ψυχοθεραπεία
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/CouplesTherapy"
                        className="block px-4 py-2 text-gray-500 hover:text-gray-700"
                      >
                        Θεραπεία Ζεύγους
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ParentalCounseling"
                        className="block px-4 py-2 text-gray-500 hover:text-gray-700"
                      >
                        Συμβουλευτική Γονέων
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/AdolescentTherapy"
                        className="block px-4 py-2 text-gray-500 hover:text-gray-700"
                      >
                        Θεραπεία Εφήβων
                      </Link>
                    </li>
                    
                  </ul>
                </motion.div>
              )}
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;