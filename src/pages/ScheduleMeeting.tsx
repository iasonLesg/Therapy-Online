import React from "react";
import Navbar from '.././Navigation/NavBar';
import Footer from '.././Navigation/Footer';
import CalendarForm from '.././Navigation/Emailer';
import PhoneΝ from '.././Navigation/Phone';
import scrolltop from './ScrollTop';
import backfgroundimage from '.././Navigation/sinedria.jpg';

const ScheduleMeeting: React.FC = () => {
  scrolltop();
  
  return (<div className="absolute top-1/8 w-5/5 h-4/5"  style={{  
    backgroundImage: "url(" + backfgroundimage + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }} > 
    <br/>
    <PhoneΝ />
    <br/><br/><br/>
    <CalendarForm />
    
  
    <br/><br/><br/>
  
   <Navbar /> <br/><br/><br/><Footer />
   </div>);
};

export default ScheduleMeeting;