import ImageIn from './assets/Lekseis.png'
import './CircleImage.css'

function Circle(){
    return (
    <a className={`SimpleImage relative items-left justify-center w-4/11 h-7/10  top-0 left-0  z-0`}  href="https://en.wikipedia.org/wiki/Dharmachakra">
        <div className="CircleComp relative items-center justify-center top-0 left-0  z-0" >
       
        <div className="ellipses-container "> 
            <img className='Words_Image' src={ImageIn} alt="" />
            <div className="ellipses ellipses__outer--thin">
                <div className="ellipses ellipses__orbit"></div>
            </div>
            <div className="ellipses ellipses__outer--thick"></div>
        </div>
    </div>
      <br/><br/><br/>
      </a>
      );

}
export default Circle;


