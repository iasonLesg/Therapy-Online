import React from "react";
import Navbar from '.././Navigation/NavBar';
import Footer from '.././Navigation/Footer';

import Image from './images/parental.jpg';

import scrolltop from './ScrollTop';


import {ImageWithText} from '.././Navigation/ImageText';

const ParentalCounseling: React.FC = () => {
  scrolltop();
  return (<div> <div className="sm:left-1/20 w-full h-screen flex items-center absolute top-0/5  ">
    <ImageWithText
      imageUrl={Image}
      title="Συμβουλευτική γονέων"
      text="Η συμβουλευτική γονέων βοηθά τους γονείς να κατανοήσουν καλύτερα τις ανάγκες των παιδιών τους και να επικοινωνούν μαζί τους πιο αποτελεσματικά. Με ανοιχτή συζήτηση και ενσυναίσθηση, μαθαίνουν πώς να δημιουργούν ένα ασφαλές και υποστηρικτικό περιβάλλον. Στόχος είναι να δυναμώσουν τη σχέση τους με τα παιδιά, ενισχύοντας την αγάπη, την αποδοχή και την κατανόηση στην οικογένεια."
      position="bottom-center"
      background="bg-gray-500/50" //bg-gray-500
      TitleClass="text-4xl md:text-6xl font-bold text-white z-10"
      SubtitleClass="text-lg md:text-2xl mt-2 text-white z-10"
      ScreenDim=" w-9/10 h-full "
      width="w-full sm:w-8/10"
       imagedim=""
    />
  </div>
  <div className="flex-1 sm:relative" style={{ height: '100vh' }}></div> 
    <div className="flex-2 md:top-0 top-2/5"  >
      <br/>
      <Footer /> <Navbar />
    </div>
  
    </div>);
};

export default ParentalCounseling;