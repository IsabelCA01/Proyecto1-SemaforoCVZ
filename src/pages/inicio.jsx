import "../styles/inicio.css";
import { ModalInfo } from "../components/InfoCont/infoCont";
import { useState } from "react";
import { ModalFun } from "../components/Funcionamiento/funcionamiento";

const Index = () => {
  const [openModalInfo, setOpenModalInfo] = useState(false)
  const [openModalFun, setOpenModalFun] = useState(false)
    return (
      <div>
      <div className="container">
        <div className="background">
          <h1 className="backgroundtext">Centro de veterinaria y zootecnia CES</h1>
        </div>
        <div className='all'>
          <p className="text">Bienvenido al portal de monitorización de pacientes en hospitalización del CVZ!
            Aquí podrás ver la información de tu mascota actualizada en tiempo real. 
          </p>
          <p className="text">El veterinario actualiza el sistema cuando hay un cambio significativo en el estado de los pacientes.
          No te preocupes si no observas un cambio en varias horas. Ante cualquier emergencia, se te contactará directamente.
          </p>
          <div className="botones">
        <button className="btninicio"onClick={() => (setOpenModalInfo(true))}>
          Información de contacto</button>
        <button className="btninicio"onClick={() => (setOpenModalFun(true))}>
          ¿Cómo funciona?</button>
          </div>
          <br></br>
          <div>
            {openModalInfo && <ModalInfo closeModalInfo={setOpenModalInfo}/>}
            {openModalFun && <ModalFun closeModalFun={setOpenModalFun}/>}
          </div>
          </div>
          
        </div>
      </div>
    );
  };
  
  export default Index;