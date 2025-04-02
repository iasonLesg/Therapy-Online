import React from "react";
import Navbar from '.././Navigation/NavBar';
import Footer from '.././Navigation/Footer';

import Image1 from './images/Couples1.jpg';

import scrolltop from './ScrollTop';
import {ImageWithText} from '.././Navigation/ImageText';

const CouplesTherapy: React.FC = () => {
  scrolltop();
  return (<div> <div className="sm:left-1/20 w-full h-screen flex items-center absolute top-0/5  ">
    <ImageWithText
      imageUrl={Image1}
      title="Θεραπεία Ζεύγους"
      text="Στην προσωποκεντρική θεραπεία ζεύγους, δημιουργούμε έναν ασφαλή χώρο όπου οι σύντροφοι μπορούν να εκφραστούν ελεύθερα, χωρίς φόβο κριτικής. Με ενσυναίσθηση και αυθεντικότητα, τους βοηθάμε να κατανοήσουν καλύτερα ο ένας τον άλλον, να βελτιώσουν την επικοινωνία τους και να ενισχύσουν τη συναισθηματική τους σύνδεση, χτίζοντας μια πιο υγιή και δυνατή σχέση."
      position="bottom-center"
      background="bg-gray-500/10" //bg-gray-500
      TitleClass="sm:text-grey-400 text-4xl md:text-6xl font-bold sm:text-white z-10"
      SubtitleClass="sm:text-grey-400  text-lg md:text-2xl mt-2 sm:text-white z-10"
      ScreenDim="w-9/10 h-full "
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

export default CouplesTherapy;