import React from "react";
import Navbar from '.././Navigation/NavBar';
import Footer from '.././Navigation/Footer';
import Image3 from './images/PersonalTherapy.jpg';
import scrolltop from './ScrollTop';
import {ImageWithText} from '.././Navigation/ImageText';

const PersonalTherapy: React.FC = () => {
    scrolltop();
    return (<div> <div className="sm:left-1/20 w-full h-screen flex items-center absolute top-0/5 ">
        <ImageWithText
            imageUrl={Image3}
            title="Ατομική Συνεδρία Ψυχοθεραπεία"
            text="Η ατομική ψυχοθεραπεία βασίζεται στην αποδοχή, την κατανόηση και την ενσυναίσθηση, βοηθώντας το άτομο να επεξεργαστεί βαθύτερα ζητήματα και να επανασυνδεθεί με τα συναισθήματά του. Στόχος είναι η έκφραση αυθεντικών αναγκών, η συναισθηματική ισορροπία και η ενίσχυση της αυτοεκτίμησης. Μέσα από τη θεραπεία, το άτομο αναπτύσσει δεξιότητες διαχείρισης που ενδυναμώνουν την ψυχική του ευεξία."
            position="bottom-right"
            background="bg-teal-500/70" //bg-gray-500
            TitleClass="text-4xl md:text-6xl font-bold text-white z-10"
            SubtitleClass="text-lg md:text-2xl mt-2 text-white z-10"
            ScreenDim=" w-9/10 h-full "
             width="w-full sm:w-5/10"
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

export default PersonalTherapy;