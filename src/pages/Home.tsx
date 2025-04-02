import React from "react";
import Navbar from '.././Navigation/NavBar';
import {OnlyText,ImageCarousel,ImageWithTextboxes} from '.././Navigation/ImageText';
import Footer from '.././Navigation/Footer';
import Image1 from './images/philosophy1.jpg';
import Circle from '.././components/CircleImage'
import scrolltop from './ScrollTop';

const Home: React.FC = () => {
  scrolltop();
  return (<div>
    <div><Navbar /> </div>
 
    <div className="flex flex-col w-full justify-center">
  {/* Image Carousel Section */}
  <div className="w-full h-80 flex  items-start">
    <ImageCarousel />
  </div>

  {/* Force ImageWithTextboxes to be AFTER */}
  <div className="w-full md:left-1/28 h-screen items-center flex relative">
    <ImageWithTextboxes />
  </div>
 
  <div className="w-full h-screen flex  relative">

 
    <div className="relative items-center justify-center ${ScreenDim} top-1/5 left-0 z-0 bg-gray-100/80">
      
        <Circle />
     

    <div className="mt-8"> {/* Adjust margin-top for spacing */}
      <OnlyText
        imageUrl={Image1}
        title="Η φιλοσοφία μας"
        text="Στηρίζεται στην αρχή της αυτοβελτίωσης και στην πεποίθηση ότι κάθε άνθρωπος έχει τη δύναμη να εξελιχθεί και να φτάσει σε νέες διαστάσεις προσωπικής ευημερίας. Πιστεύουμε πως όταν ακολουθείς τον προσωπικό σου «τροχό του Dharma», τη δική σου πορεία με αυθεντικότητα και επιμονή, μπορείς να ξεπεράσεις οποιοδήποτε εμπόδιο και να επιτύχεις την εσωτερική ισορροπία και ικανοποίηση που επιθυμείς."
        position="center"
        background="bg-teal-900/60" //bg-gray-500
        TitleClass="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white z-10"
        SubtitleClass="text-sm sm:text-base md:text-lg mt-2 text-white z-10"
        ScreenDim="w-full h-full"
        width="w-9/10"
         imagedim=""
      />
    </div>
    </div>
  </div>
  
</div>
<div className="flex-1" style={{ height: '20vh' }}></div> 
    <div className="relative items-center justify-center ${ScreenDim} top-1/5 left-0 z-0 bg-gray-100/80">

    
     <Footer />
     </div>
    </div>);
};

export default Home;