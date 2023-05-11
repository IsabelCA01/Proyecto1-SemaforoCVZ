import "../styles/infoPacientes.css";
import InfoPaciente from "../components/InfoPaciente/InfoPaciente";

const InfoPacientes = () => {
  
    return (
      <div className="paall">
        <div className="pacontainer">
        <h1>Información del Paciente:</h1>
        <InfoPaciente/>
        </div>
      </div>
    );
  };
  
  export default InfoPacientes;