import "../InfoPaciente/InfoPaciente.css";
import { useState } from "react";


const InfoPaciente = (nombre, edad, fechadeingreso, especie, raza, diagnostico, estado, semaforo) => {
  
    return (
      <div className="ipback">
        <div className="ipcontainer">
            <h1>Nombre del paciente: Amelie</h1>
            <h2>Edad: 3 años</h2>
            <h2>Fecha de ingreso: 08/01/2023</h2>
            <h2>Especie: Gato</h2>
            <h2>Raza: Criollo</h2>
            <h2>Diagnóstico: Ninguno</h2>
            <h2>Estado: En espera</h2>
            <h2>Semaforo: Verde</h2>
        </div>
      </div>
    );
  };
  
  export default InfoPaciente;