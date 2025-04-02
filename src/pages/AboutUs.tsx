import React from "react";
import Navbar from '.././Navigation/NavBar';
import Footer from '.././Navigation/Footer';

import image1 from './Images/aboutus1.png'
import image2 from './Images/PhaceIcon.png'
import image3 from './Images/aboutus2.png'
import image4 from './Images/AboutUs3.png'

import Image2 from './images/volunteer.png';
import scrolltop from './ScrollTop';

import {ImageWithText} from '.././Navigation/ImageText';

const AboutUs: React.FC = () => {
  scrolltop();
  
  return (<div>
    <div className="flex flex-col w-full justify-center top-0">
    
      <div className="sm:left-1/20 w-full h-screen flex items-center relative">
      <ImageWithText
        imageUrl={image1}
        title="Σχετικά με εμάς"
        text="Στην επιχείρησή μας, πιστεύουμε ότι κάθε άνθρωπος έχει τη δυνατότητα να αναπτύξει το πλήρες δυναμικό του, ακολουθώντας τον δικό του προσωπικό δρόμο προς την αυτοβελτίωση και την ψυχική ευημερία. Η φιλοσοφία μας στηρίζεται στην αυτογνωσία και την αυτοβελτίωση, αναγνωρίζοντας την αξία της εσωτερικής ισορροπίας και της προσωπικής ανάπτυξης. Είτε πρόκειται για έναν ενήλικα, είτε για έναν έφηβο ή παιδί, ο στόχος μας είναι να παρέχουμε την υποστήριξη και τα εργαλεία που απαιτούνται για την ενδυνάμωση του κάθε ατόμου στην πορεία του προς την ευημερία. Η φιλοσοφία μας ενσωματώνει δύο βασικές προσεγγίσεις: την προσωποκεντρική και τη γνωστική-συμπεριφορική θεραπεία (ΓΣΘ), οι οποίες χρησιμοποιούνται ανάλογα με τις ανάγκες του κάθε πελάτη, με κύριο στόχο την ενίσχυση της αυτοεκτίμησης και την ανάπτυξη δεξιοτήτων αντιμετώπισης."
        position="bottom-center"
        background="relative bg-teal-400/50 sm:absolute" //bg-gray-500
        TitleClass="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold sm:text-white z-10"
        SubtitleClass="text-black  text-sm sm:text-base md:text-lg lg:text-xl  mt-2 sm:text-white z-10"
        ScreenDim=" w-9/10 h-full "
        width="w-full sm:w-8/10"
         imagedim=""
      />
      </div>
      </div>
       <div className="flex-2" style={{ height: '60vh' }}></div> 
      <div className="flex flex-col w-full justify-center">
     
      <div className="sm:left-1/20 w-full h-screen flex  relative">
          <ImageWithText
          imageUrl={image2}
          title="Προσωποκεντρική Προσέγγιση"
          text="Στην προσωποκεντρική προσέγγιση, εστιάζουμε στην αποδοχή, την ενσυναίσθηση και την αυθεντικότητα, προσφέροντας έναν ασφαλή και υποστηρικτικό χώρο, όπου το άτομο μπορεί να εκφράσει τα συναισθήματά του και τις σκέψεις του χωρίς φόβο κριτικής. Μέσω αυτής της διαδικασίας, ενδυναμώνουμε το άτομο να αναγνωρίσει και να αποδεχτεί τον εαυτό του, καθώς και να αναπτύξει τη συναισθηματική του ωριμότητα και τη δυνατότητα να δημιουργήσει υγιείς σχέσεις με τον εαυτό του και τους γύρω του. Στόχος μας είναι η ενίσχυση της συναισθηματικής ισορροπίας και  της αυτοεκτίμησης, επιτρέποντας στους πελάτες μας να ζουν αυθεντικά και με περισσότερη πληρότητα."
          position="right"
          background="relative bg-gray-400/40 sm:absolute" //bg-gray-500
          TitleClass="sm:text-grey-400  text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-grey-400 z-10"
          SubtitleClass="sm:text-grey-400  text-sm sm:text-base md:text-lg lg:text-xl  mt-2 text-grey-400 z-10"
          ScreenDim=" w-9/10 h-auto "
          width="w-full sm:w-3/5"
           imagedim=""
          />
      </div>
      </div>
       <div className="flex-2" style={{ height: '60vh' }}></div> 
      <div className="flex flex-col w-full justify-center">
     
      <div className="sm:left-1/20 w-full h-screen flex  relative">
          <ImageWithText
          imageUrl={image3}
          title="Γνωστική Συμπεριφορική Θεραπεία για Εφήβους"
          text="Εξειδικευόμαστε στη γνωστική-συμπεριφορική θεραπεία (ΓΣΘ) για παιδιά και εφήβους, προσφέροντας πρακτική υποστήριξη σε ζητήματα άγχους, κατάθλιψης, φοβιών και συμπεριφοράς. Η ΓΣΘ βοηθά στην αναγνώριση και αλλαγή αρνητικών σκέψεων, ενισχύοντας την ψυχική ανθεκτικότητα και την αυτορρύθμιση. Σε συνδυασμό με την προσωποκεντρική προσέγγιση, δίνουμε στα παιδιά τα εργαλεία για να διαχειρίζονται τις προκλήσεις τους με αυτοπεποίθηση και ισορροπία."
          position="left"
          background="relative bg-gray-400/40 sm:absolute" //bg-gray-500
          TitleClass="sm:text-grey-400  text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-grey-400 z-10"
          SubtitleClass="sm:text-grey-400 text-sm sm:text-base md:text-lg lg:text-xl  mt-2 text-grey-400 z-10"
          ScreenDim=" w-9/10 h-auto  "
          width="w-full sm:w-9/20"
          imagedim=""
          />
      </div>
      </div>
       <div className="flex-2" style={{ height: '60vh' }}></div> 
      <div className="flex flex-col w-full justify-center">
     
      <div className="sm:left-1/20 w-full h-screen flex  relative">
      
      <ImageWithText
        imageUrl={Image2}
        title="Eθελοντική εργασία"
        text="Μέσα από αυτή την εμπειρία, κατανοήσαμε τις ιδιαίτερες ανάγκες ατόμων που βιώνουν κοινωνικό αποκλεισμό, αποκτώντας βαθύτερη κατανόηση του ανθρώπινου ψυχισμού και της ανάγκης για ενσυναίσθηση και υποστήριξη σε κάθε τομέα της ζωής. Αυτή η εμπειρία ενδυναμώνει τη δέσμευσή μας να προσφέρουμε στήριξη σε όλους, ανεξαρτήτως των συνθηκών τους."
        position="bottom-right"
        background="relative   bg-teal-500/80 sm:absolute" //bg-gray-500
        TitleClass="text-grey-400  text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold sm:text-white  z-10"
        SubtitleClass="text-grey-400   text-sm sm:text-base md:text-lg lg:text-xl mt-2 sm:text-white z-10"
        ScreenDim=" w-9/10 h-full "
        width="w-full sm:w-3/5"
         imagedim=""
      />
      
    </div>
    </div>
       <div className="flex-2" style={{ height: '60vh' }}></div> 
      <div className="flex flex-col w-full justify-center">
     
      <div className="sm:left-1/10 w-full h-screen flex  relative">
          <ImageWithText
          imageUrl={image4}
          title="Η Προσέγγισή μας"
          text="Με το συνδυασμό αυτών των δύο προσεγγίσεων, βοηθάμε κάθε άτομο να βρει τη δική του ισχυρή φωνή και να αναγνωρίσει τη δύναμη που έχει για να ξεπεράσει τις προκλήσεις της ζωής. Στην επιχείρησή μας, προσφέρουμε εξατομικευμένες και ολιστικές υπηρεσίες, δίνοντας στους πελάτες μας τα εργαλεία και τη στήριξη που χρειάζονται για να επανασυνδεθούν με τον αυθεντικό τους εαυτό και να επιτύχουν ψυχική και συναισθηματική ισορροπία. Είμαστε εδώ για να στηρίξουμε την πορεία σας προς την αυτοβελτίωση, την ανάπτυξη και την ευημερία με ενσυναίσθηση, αποδοχή και σεβασμό."
          position="bottom-center"
          background="relative bg-teal-100/90 sm:absolute" //bg-gray-500
          TitleClass="text-grey-400  text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 z-10"
          SubtitleClass="text-grey-400  text-sm sm:text-base md:text-lg lg:text-xl  mt-2 text-gray-700 z-10"
          ScreenDim=" w-8/10 h-full "
          width="w-full sm:w-8/10"
           imagedim=""
          />
      </div>
      </div>
       <div className="flex-2" style={{ height: '60vh' }}></div> 
      <div className="flex flex-col w-full justify-center">
      <div className="w-full md:left-1/28 h-screen items-center flex relative ">


   <Navbar /> <Footer /></div>
    </div>

    </div>);
};

export default AboutUs;