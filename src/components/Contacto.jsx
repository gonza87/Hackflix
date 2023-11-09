import "./contacto.css"

function Contacto(){

    return(
        
        <>
        <div className="text-center cajacontacto">
            <h1>CONTACTO</h1>
            <p>Pablo Neruda 20100, Punta del Este, Uruguay</p>
            <p className="fw-bold">Tel.: +598 0000000</p>
            <p>Info@hackflix.com.uy</p>
            <p className="fw-bold">Todos los dias de 10:00 a 20:00 hs</p>
            <iframe className="mapa"
        
                width="560"
                height="315"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6542.375073612456!2d-54.896047149076054!3d-34.926833335068906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spunta%20del%20este%20la%20barra!5e0!3m2!1ses-419!2suy!4v1683769342136!5m2!1ses-419!2suy"
                frameborder="0"
                allowfullscreen>

            </iframe>
        </div>
            
      
        </>
    );
};

export default Contacto;