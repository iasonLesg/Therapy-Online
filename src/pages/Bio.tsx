import React from "react";
import Navbar from '../Navigation/NavBar';
import Footer from '../Navigation/Footer';
import scrolltop from './ScrollTop';

import BioSection from '../Navigation/BioComponent';

const Bio: React.FC = () => {
  scrolltop();
  return (<div> 
    <div className="flex flex-col w-full sm:realative sm:top-1/5 absolute top-1/5 ">
      <BioSection />
     

    </div>
    <div className="flex-1 sm:relative" style={{ height: '100vh' }}></div> 
    <div className="flex-1 sm:absolute" style={{ height: '220vh' }}></div> 
    <div className="flex-2 md:top-0 top-2/5"  >
      <br/>
      <Footer /> <Navbar />
    </div>
  
    </div>);
};

export default Bio;