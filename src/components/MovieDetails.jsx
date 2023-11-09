import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import "./MovieDetails.css";
function MovieDetails(){
    const params = useParams();
    //console.log(params)
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const [nopeli, setNopeli] = useState(false);
    
    useEffect(()=>{
       axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=d4954e31ae32b053fa2139fbb6819176`).then((result) => {
       
       setMovies(result.data);
            

           
       })
       .catch(error => {
        // En caso de error en la solicitud
        console.error("Error:", error);
        setNopeli(true)
        
    });
     
   },[]);
   
    
    if(nopeli){
       return(
            <>
            <div className="col-12 text-center">
                <p className="textnoexiste">La pelicula no existe</p>
                <Button onClick={()=>{navigate("/")}} variant="light">Volver</Button>{' '}
            </div>
            
            </>
       )
    }
    
    else{

        return(
       
        <>
            
            
        
         <div className="col-12 text-center">
           
            {movies.length === 0 ?(<p className="loading">Loading...</p>) :(
            <>
           
            <img  className="poster" src={"https://image.tmdb.org/t/p/original"+movies.poster_path} alt="" />
            <p><b>Fecha de publicacion:</b> {movies.release_date}</p>
            <p><b>Resumen:</b> {movies.overview}</p>
            <p><b>Raiting:</b> {movies.vote_average}</p>
              
              <Button onClick={()=>{navigate("/")}} variant="light">Volver</Button>{' '}
       
      
            </>
            )}
            
         </div>
       
        </>
       )
    }
}



export default MovieDetails;