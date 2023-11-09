import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
function ModalMovie({id}) {
  //const [show, setShow] = useState(false);
  const navigate = useNavigate();
  //const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  return (
    <>
    <div className='text-center mt-1'>

        <Button variant="outline-light " size="sm" onClick={()=>{navigate(`/pelicula/${id}`)}}>
        Info
      </Button>

    
    </div>
      
    </>
  );
}



export default ModalMovie;