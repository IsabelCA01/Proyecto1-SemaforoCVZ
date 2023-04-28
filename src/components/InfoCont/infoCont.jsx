import "../InfoCont/infoCont.css";

export const ModalInfo = ({closeModalInfo}) => {
    return (
        <div className="modalBackinfo">
        <button className="closeBtn" onClick={() => {closeModalInfo(false);}}>X</button>
            <div className='content'>
                <div className='contact'>
                    <h1 >Sede Escobero</h1>
                    <h3>Número de contacto</h3>
                    <p>+57(604)836263</p>
                    <h3>Horario de visita</h3>
                    <p>12:00 pm - 3:00pm</p>
                </div>
                <div className='contact'>
                    <h1>Sede La Frontera</h1>
                    <h3>Número de contacto</h3>
                    <p>+57(604)836263</p>
                    <h3>Horario de visita</h3>
                    <p>1:00pm - 4:00pm</p>
                </div>
            </div>
        </div>
    )
  }
  
  export default ModalInfo