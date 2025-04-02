import React from "react";

import {ImageWithText} from '.././Navigation/ImageText';
import Image from './Images/404Fog.png';
import scrolltop from './ScrollTop';

const domain='/Therapy-Online/'

const NotFound: React.FC = () => {
  scrolltop();
  return (<div className="w-full h-full">
  
    <ImageWithText
      imageUrl={Image}
      title="404 Page not found"
      text="Ούπς Κάτι πήγε λάθος!"
      position="center"
      background="bg-white/5" //bg-gray-500
      TitleClass="text-4xl md:text-6xl font-bold text-gray-200 p-2"
      SubtitleClass="text-lg md:text-2xl mt-2 text-gray-300  p-2"
      ScreenDim=" w-full h-full "
       width="w-full sm:w-8/10"
      imagedim=""
    />
     <a
          href={domain}
          className="absolute block left-2/5 w-1/5  top-3/5 text-center bg-white text-black py-2 rounded hover:bg-white"
        >
          Επιστροφή στην Αρχική
        </a>

  </div>);
};

export default NotFound;