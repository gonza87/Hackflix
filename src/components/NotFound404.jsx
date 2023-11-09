import imagenerror from "../assets/404.png"
import "./NotFound404.css"
function NotFound(){
    return(
        <div className="text-center">
            
        
            <img className="img404" src={imagenerror} alt="" />
        </div>
        
    );
}

export default NotFound;