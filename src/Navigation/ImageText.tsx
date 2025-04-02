
import './ImageText.css'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import carousel1 from './sinedria.jpg'
import carousel2 from './WheelBackLogo.png'
import carousel3 from './Image4.jpg'
import carousel4 from './Couples2.jpg'
import { useNavigate } from "react-router-dom";
import Imagecont from './BaCKiMAGE.png'
import Icon1 from './Icon1.png'
import Icon2 from './Icon2.png'
import Icon3 from './Icon3.png'


const slides = [
  
  {
    image: carousel1,
    title: "Συνεδρία",
    subtitle: "Κλείσε άμεσα συνεδρία",
    link: "/ScheduleMeeting",
    TextClassAdd:"text-sm absolute top-1/2 left-1/2 text-white"
  },
  {
    image: carousel3,
    title: "Η φιλοσοφία μας",
    subtitle: "Η Οδός προς την Αυθεντικότητα και την Ψυχική Ανθεκτικότητα",
    link: "/AboutUs",
    TextClassAdd:"text-sm  absolute top-1/2 left-1/2 text-white"
  },
  {
    image: carousel4,
    title: "Θεραπεία Ζευγαριών",
    subtitle: "Μάθε περισσότερα για τις υπηρεσίες μας",
    link: "/CouplesTherapy",
    TextClassAdd:"text-sm  absolute top-1/2 left-1/2 text-white"
  },
  {
    image: carousel2,
    title: "Σχετικά με εμάς",
    subtitle: "Ενημερωθείτε για το ποιοί είμαστε",
    link: "/Bio",
    TextClassAdd:"text-sm absolute top-1/2 left-2/4  md:left-3/4 text-white"
  }
];


interface ImageWithTextProps {
  imageUrl: string;
  title: string;
  text: string;
  position: "top-left" | "top-center" | "top-right" | "left" | "center" | "right" | "bottom-left" | "bottom-center" | "bottom-right";
  background: string;
  TitleClass: string;
  SubtitleClass:string;
  width:String;
  ScreenDim:string;
  imagedim:string;
}

const positionClasses: Record<string, string> = {
  "top-left": "bottom-4 left-0 sm:top-4 sm:left-4",
  "top-center": "bottom-4 left-0 sm:top-4 sm:left-1/2 transform sm:-translate-x-1/2",
  "top-right": "bottom-4 right-0 sm:top-4 sm:right-4",
  "left": "bottom-4 left-0  sm:top-1/2 sm:left-4 transform sm:-translate-y-1/2",
  "center": "bottom-4 left-0  sm:top-1/2 sm:left-1/2 transform sm:-translate-x-1/2 sm:-translate-y-1/2",
  "right": "bottom-4 right-0 sm:top-1/2 sm:right-4 transform sm:-translate-y-1/2",
  "bottom-left": "bottom-4 left-0 sm:bottom-4 sm:left-4",
  "bottom-center": "bottom-4 left-0 sm:bottom-4 sm:left-1/2 transform sm:-translate-x-1/2",
  "bottom-right": "bottom-4 right-0 sm:bottom-4 sm:right-4"
};



export const ImageHome = () => {
    return (<div className="ImageHome absolute top-0 left-0 w-full h-[65vh] z-0  bg-gray-100/80">
        <img 
          src={carousel1} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        {/* Title and Subtitle inside the background */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold">Your Website Title</h1>
          <p className="text-lg md:text-2xl mt-2">Your catchy subtitle goes here</p>
        </div>
        
      </div>)

}
export function ImageCarousel() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [manualChange, setManualChange] = useState(false);

  useEffect(() => {
    if (!manualChange) {
      const interval = setInterval(() => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 10000);

      return () => clearInterval(interval);
    }
  }, [manualChange]);

  const handleDotClick = (index:number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    setManualChange(true);
    setTimeout(() => setManualChange(false), 10000);
  };

  const handleArrowClick = (newDirection:number) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % slides.length;
      } else {
        return prev === 0 ? slides.length - 1 : prev - 1;
      }
    });
    setManualChange(true);
    setTimeout(() => setManualChange(false), 10000);
  };

  return (
    <div className="ImageHome absolute top-0 left-0 w-full h-[65vh] z-0 bg-gray-100/80">
    <AnimatePresence mode="wait" custom={direction}>
      <motion.img
        key={currentSlide}
        src={slides[currentSlide].image}
        alt={`Slide ${currentSlide + 1}`}
        className="absolute w-full h-full object-cover cursor-pointer"
        onClick={() => navigate(slides[currentSlide].link)}
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </AnimatePresence>
  
    <div className={`transform -translate-x-1/2 -translate-y-1/2 ${slides[currentSlide].TextClassAdd}`}>
      {/* Title */}
      <h1 className="text-xs sm:text-sm md:text-4xl font-bold">
        {slides[currentSlide].title}
      </h1>
      {/* Subtitle */}
      <p className="text-xs sm:text-sm md:text-lg mt-2">
        {slides[currentSlide].subtitle}
      </p>
    </div>
  
    {/* Dots */}
    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {slides.map((_, index) => (
        <div
          key={index}
          onClick={() => handleDotClick(index)}
          className={`w-3 h-3 rounded-full cursor-pointer ${
            currentSlide === index ? "bg-white" : "bg-gray-400"
          }`}
        />
      ))}
    </div>
  
    {/* Left Arrow */}
    <div 
      className="absolute left-4 bottom-5 sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2 cursor-pointer z-20 flex items-center justify-center transition duration-300 hover:opacity-80 hover:scale-110"
      onClick={() => handleArrowClick(-1)}
    >
      <span className="text-white text-3xl sm:text-5xl md:text-5xl">&#8592;</span>
    </div>
  
    {/* Right Arrow */}
    <div 
      className="absolute right-4 bottom-5 sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2 cursor-pointer z-20 flex items-center justify-center transition duration-300 hover:opacity-80 hover:scale-110"
      onClick={() => handleArrowClick(1)}
    >
      <span className="text-white text-3xl sm:text-4xl md:text-5xl">&#8594;</span>
    </div>
  </div>
    
  );
}






export const ImageWithText: React.FC<ImageWithTextProps> = ({ imageUrl, title, text, position, background, TitleClass,SubtitleClass,width,ScreenDim,imagedim}) => {
  const IsScreen = () => {
    // Only add shadow when imageUrl is empty
    if (imageUrl === "") {
      return ""; // Add shadow when no image
    } else {
      return " text-white shadow-lg"; // No shadow when imageUrl is provided
    }
  };
  
  const Displayed = () => {
    // Only add shadow when imageUrl is empty
    if (imageUrl === "") {
      return " "; // Add shadow when no image
    } else {
      return "Image Displayed"; // No shadow when imageUrl is provided
    }
  };
  
  return (
      <div className={` relative items-center justify-center ${ScreenDim} top-0 left-0 z-0 bg-gray-100/80`}>
    {/* Main Image */}
    <img
      src={imageUrl}
      alt={`${Displayed()}`}
      className={`w-full h-auto object-cover ${imagedim} ${IsScreen()} `} // Apply shadow if imageUrl is empty
    />
      {/* Text Block */}
          {/* Text Block */}
    <div
      className={`absolute p-4 rounded-2xl shadow-md  rounded-2xl shadow-md ${width} ${positionClasses[position]} ${background}`}
    >
      {/* Title */}
      <h2 className={`${TitleClass} `}>{title}</h2>

      {/* Subtitle */}
      <p className={`${SubtitleClass}  `}>{text}</p>
    </div>
  </div>
  );
};





export const OnlyText: React.FC<ImageWithTextProps> = ({  title, text, position, background, TitleClass,SubtitleClass,width,ScreenDim}) => {
 
  
  
  return (
    <div className={` relative items-center justify-center ${ScreenDim} top-0 left-0 z-0  `}>
     
      <div className={`relative p-4 rounded-2xl shadow-md ${width} ${positionClasses[position]} ${background}`}>
        <h2 className={`${TitleClass}`}>{title}</h2>
        <p className={`${SubtitleClass}`}>{text}</p>
      </div>
    </div>
  );
};

export const  ImageWithTextboxes = () => {
  const navigate = useNavigate();

  return (
    <div className="absolute w-9/10   mx-auto top-0 bg-gray-100/80">
    {/* Main Image */}
    
    <img
      src={Imagecont}
      alt="Main"
      className="w-full h-auto rounded-lg shadow-lg"
    />
  
    {/* Centered Title and Subtitle */}
    <div className="text-sm absolute md:top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-500/40 text-white md:p-6 rounded-lg shadow-lg text-center">
      <p className=" sm:text-sm md:text-3xl lg:text-4xl font-bold text-white z-10 ">
        Υπηρεσίες και Εμπειρία
      </p>
      <p className="text-sm sm:text-lg"></p>
    </div>
  
    {/* Textboxes Container (Icons + Text) */}
    <div className="relative sm:absolute bottom-0 sm:bottom-0 left-0 w-full p-4 flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-4 mt-6 sm:mt-0">
      {[
        { img: Icon1, text: "Εξειδίκευση στην Προσωποκεντρική ψυχοθεραπεία", link: "/AboutUs" },
        { img: Icon2, text: "Εξειδίκευση στην Γνωστική συμπεριφοριστική ψυχοθεραπεία παιδιών και εφήβων", link: "/AboutUs" },
        { img: Icon3, text: "Εμπειρία με εθελοντισμό", link: "/AboutUs" },
      ].map((item, index) => (
        <div
          key={index}
          className="w-full sm:w-3/10 bg-white/90 shadow-lg p-6 rounded-lg cursor-pointer flex flex-col items-center"
          onClick={() => navigate(item.link)}
        >
          <img src={item.img} alt="Icon" className="w-24 h-24 mb-2 h-auto sm:w-20 sm:h-20" />
          <p className="text-sm sm:text-base text-center font-medium">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
 
  );
};





