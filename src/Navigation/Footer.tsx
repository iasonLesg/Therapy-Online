import { X, Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footerL text-gray-700 bg-gray-400/30 w-100vw left-0" >
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        {/* Find Us Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Find Us</h3>
          
          <div className="flex space-x-4">
            <a
              href="https://x.com/Athansios1Dal?s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500"
            >
              <X sx={{ fontSize: 24 }} />
            </a>
            <a
              href="https://www.facebook.com/share/15t8EACd6Z/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500"
            >
              <Facebook sx={{ fontSize: 24 }} />
            </a>
            <a
              href="https://www.instagram.com/thanasis_dallas.psy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500"
            >
              <Instagram sx={{ fontSize: 24 }} />
            </a>
            <a
              href="https://www.linkedin.com/in/%CE%B1%CE%B8%CE%B1%CE%BD%CE%B1%CF%83%CE%B9%CE%BF%CF%82-%CE%B4%CE%B1%CE%BB%CE%BB%CE%B1%CF%82-493523231/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500"
            >
              <LinkedIn sx={{ fontSize: 24 }} />
            </a>
         
           
            
          </div>
          <br/>
          <br/>
        </div>

        {/* Company Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
            <Link
              to="/AboutUs"
              className="text-gray-400 hover:text-blue-500"
            >
            
             About Us
             
              
            </Link>
            </li>
            <li>
            <Link
              to="/Bio"
              className="text-gray-400 hover:text-blue-500"
            >
            
              Bio
             
              
            </Link>
            </li>
          </ul>
          <br/>
        </div>
        

        {/* Website Created By Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Website Created By</h3>
          
          <div className="flex space-x-4">
        
            <a
              href="https://www.linkedin.com/in/iasonlesgidis/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500"
            >
              <LinkedIn sx={{ fontSize: 24 }} />
            </a>
            
          </div>
          <br/>
          <br/>
          
        </div>
      </div>

      {/* Footer Bottom Text */}
     
    </footer>
  );
};

export default Footer;
