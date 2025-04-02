import React from "react";
import Navbar from '.././Navigation/NavBar';
import Footer from '.././Navigation/Footer';

import Image from './images/Adolescent.jpg';

import scrolltop from './ScrollTop';
import {ImageWithText} from '.././Navigation/ImageText';

const AdolescentTherapy: React.FC = () => {
  scrolltop();
  return (<div > <div className="sm:left-1/20 w-full h-screen flex items-center absolute top-0/5    ">
    <ImageWithText
      imageUrl={Image}
      title="Θεραπεία σε εφήβους"
      text="Συνδυάζουμε τη γνωστική συμπεριφορική θεραπεία (CBT) με την προσωποκεντρική προσέγγιση για να προσφέρουμε ολοκληρωμένη στήριξη στους εφήβους. Με τη CBT, μαθαίνουν να αναγνωρίζουν και να αντιμετωπίζουν αρνητικές σκέψεις, αναπτύσσοντας υγιείς τρόπους διαχείρισης του άγχους και της κατάθλιψης. Παράλληλα, η προσωποκεντρική προσέγγιση τους παρέχει ένα ασφαλές περιβάλλον έκφρασης, ενισχύοντας την αυτοεκτίμηση και την ψυχική ανθεκτικότητα. "
      position="bottom-center"
      background="bg-teal-500/40" //bg-gray-500
      TitleClass="text-grey-400 text-4xl md:text-6xl font-bold sm:text-white z-10"
      SubtitleClass="text-grey-400  text-lg md:text-2xl mt-2 sm:text-white z-10"
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

export default AdolescentTherapy;