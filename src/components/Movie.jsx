//import data from "../../movies.js";
import "./Movie.css";
import Rating from 'react-rating-stars-component';
import { useState, useEffect } from 'react';
import ModalMovie from "./ModalMovie.jsx";

import axios from "axios";
import Button from 'react-bootstrap/Button';

function Movie(){
    const [raitings, setRaitings] = useState(0);
    const [page, setPage] = useState(1);
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [movies, setMovies] = useState([]);
    useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=d4954e31ae32b053fa2139fbb6819176&include_adult
      =false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`).then((result) => {
       console.log(result.data.results)
      setMovies(result.data.results);
      

          
      });
  },[page]);
  
    return (
        <>
        <div className="raiting">
          <Rating
            count={5}
            size={44}
            onChange={(newValue) => {
              setRaitings(newValue*2)
            }}
          />
        </div>
      
        {movies.map(function(movie){
          if(movie.vote_average >= raitings){   
            return  <div className="col-sm-6 col-lg-4 col-xl-3 pt-3 text-center"> 
                      <img  className="poster" src={"https://image.tmdb.org/t/p/original"+movie.poster_path} alt="" />
                      
                      <ModalMovie id={movie.id}/>
                      
                    </div>
          }
          else if(raitings===0){      //Muestro todas las pelis
                 return  <div className="col-sm-6 col-lg-4 col-xl-3 pt-3 text-center"> 
                          <img className="poster" src={movie.poster_path} alt="" />
                          
                          <ModalMovie id={movie.id}/>
                         
                        </div>
              }
              
            })}
            
              <div className="text-center mt-4">
              <Button variant="primary"
              onClick={()=>{
                if(page === 1){
                  setPage(1)
                  window.scrollTo(0, 0);}
                  else{setPage(page - 1)
                  window.scrollTo(0, 0);
                  }
                  
                
              }}
              >Back</Button>{' '}
              <Button variant="primary"
              className="ms-1" 
              onClick={()=>{
                setPage(page + 1)
                window.scrollTo(0, 0);
              }}>Next
              </Button>{' '}
              </div>
          </>  
    );
  
}

export default Movie;