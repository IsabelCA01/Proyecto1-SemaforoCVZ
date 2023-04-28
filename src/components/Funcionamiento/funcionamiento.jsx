import "../Funcionamiento/funcionamiento.css";

export const ModalFun = ({closeModalFun}) => {
    return (
        <div className="modalBack">
        <button className="closeBtn" onClick={() => {closeModalFun(false);}}>X</button>
        <div>
            <h1 className='title'>¿Cómo Funciona?</h1> 
            <p className='text'>Cada vez que haya un cambio significativo en la salud de tu mascota hospitalizada, 
              el veterinario actualizará su información en la página mediante un sistema de
              clasificación por colores. También dará los comentarios que considere relevantes. 
              <br></br>
              Ten en cuenta que nuestros veterinarios están muy ocupados cuidando de todos los animales,
              así que no estarán actualizando la información a cada instante. Si no observas cambios, vuelve
              a intentarlo en unas horas.
              <br></br> 
              No te preocupes, ante cualquier emergencia, el veterinario se comunicará con el número de teléfono de contacto
              que se dejó al momento de la admisión del paciente.
            </p>
          </div>
          <div>
            <h2 className='title2'>Clasificación por colores</h2>
            <div className='semaforo'>
              <div className='green'></div>
              <p>Color verde</p>
            </div>
            <div className='semaforo'>
              <div className='yellow'></div>
              <p>Color amarillo</p>
            </div>
            <div className='semaforo'>
              <div className='red'></div>
              <p>Color rojo</p>
            </div>
          </div>
        </div>
    )
  }
  
  export default ModalFun