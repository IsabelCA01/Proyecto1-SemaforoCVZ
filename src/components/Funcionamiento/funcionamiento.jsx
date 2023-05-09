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
            </p>
          </div>
          <div>
            <h2 className='title2'>Clasificación por colores</h2>
            <div className='semaforo'>
              <div className='green'></div>
              <p className="textsem">Color verde: <span>Implica que la mascota ya terminó tratamiento y se encuentra mejor. Es posible que sea dado de alta 
                en pocas horas.</span></p>
            </div>
            <div className='semaforo'>
              <div className='yellow'></div>
              <p className="textsem">Color amarillo: <span>El paciente se encuentra estable y todavía está en tratamiento. No será
                dado de alta hasta que acabe el tratamiento.</span></p>
            </div>
            <div className='semaforo'>
              <div className='red'></div>
              <p className="textsem">Color rojo: <span>El paciente se encuentra en estado crítico. Es posible que haya sido hospitalizado 
                hace pocas horas y todavía se necesite ver su respuesta al tratamiento.</span></p>
            </div>
          </div>
        </div>
    )
  }
  
  export default ModalFun