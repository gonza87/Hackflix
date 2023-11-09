import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Movie from './components/Movie';
import Portada from "./components/Portada";
import MovieDetails from './components/MovieDetails';
import Footer from './components/Footer';
import SobreNosotros from './components/SobreNosotros';
import Contacto from './components/Contacto';
import NotFound from './components/NotFound404';
import Search from './components/Search';
import './App.css'



function App() {

  return (
    <>
      
      <Header />
      <Portada/>
      
      <div className='container'>
        <div className='row'>
          <Routes>
            <Route path="/" element={<Movie />}/>
            <Route path="/Hackflix" element={<Movie />}/>
            <Route path="/pelicula/:id" element={<MovieDetails />}/> 
            <Route path="/sobre-nosotros" element={<SobreNosotros />}/>
            <Route path="/contacto" element={<Contacto />}/>
            <Route path="/search" element={<Search />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>    
        </div>
     </div> 
     <Footer />        
    </>
  )
}

export default App
