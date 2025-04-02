import './components/CircleImage.css'
import './App.css'
import {  Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Bio from './pages/Bio';
import NotFound from './pages/NotFound';
import AboutUs from './pages/AboutUs';
import CouplesTherapy from './pages/CouplesTherapy';
import ParentalCounseling from './pages/ParentalCounseling';
import AdolescentTherapy from './pages/AdolescentTherapy';
import PersonalCounseling from './pages/PersonalCounseling';

import PersonalTherapy from './pages/PersonalTherapy';
import ScheduleMeeting from './pages/ScheduleMeeting';
const domain='/'

function App() {

  return (
    <>
   
     
      
      <div className="mt-[50vh] p-6 bg-gray-100/80">
        <Routes>
          <Route path={domain }element={<Home />} />
          <Route path= {domain + "bio"}   element={<Bio />}  />
          <Route path={domain + "AboutUs"}element={<AboutUs />} />
          <Route path={domain + "CouplesTherapy"} element={<CouplesTherapy />}  />
          <Route path={domain + "ParentalCounseling"} element={<ParentalCounseling />}  />
          <Route path={domain + "AdolescentTherapy"} element={<AdolescentTherapy />}  />
          <Route path={domain + "PersonalCounseling"} element={<PersonalCounseling />} />
          <Route path={domain + "PersonalTherapy"} element={<PersonalTherapy />} />
          <Route path={domain + "ScheduleMeeting"} element={<ScheduleMeeting />} />
          <Route path={domain + "*"}element={<NotFound />} />
         
        </Routes>
        
      </div>
   
    
   
  
    </>
  )
}

export default App
