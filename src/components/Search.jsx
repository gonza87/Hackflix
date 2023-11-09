import { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";



import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Search(){
    const [title, setTitle] = useState("")
    const [movies, setMovies] = useState([]);
  
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d4954e31ae32b053fa2139fbb6819176&include_adult=false&language=en-US&page=1&query=${title}`).then((result) => {
            //setMovies(result.data);
            console.log("title"+ title)
            setMovies(result.data.results)
          
            console.log(result.data.results)
           
            
        });
    },[title]);
  
   
    return(
        <>
       
            <h2 className="text-center">Ingrese pelicula a buscar</h2>
        
    
        <InputGroup  className="mb-3">
        <Form.Control
          
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={title}
          onChange={(event)=> setTitle(event.target.value) }
        />
      </InputGroup>
        
        {movies.map((el)=>{
            
            if(el.title !== ""){
                return (
                    <div className="col-sm-6 col-lg-4 col-xl-3 pt-3 text-center"> 
                      <img  className="poster" src={"https://image.tmdb.org/t/p/original"+el.poster_path} alt="" />
                      
                      
                    </div>
                )
                
            }
            
            else {
               console.log("no") 
            }
             
        })}
        
        
        
            
      
        
        </>
        
        
    );
}

export default Search;





//https://api.themoviedb.org/3/search/movie?api_key=d4954e31ae32b053fa2139fbb6819176&include_adult=false&language=en-US&page=1&query=aladdin