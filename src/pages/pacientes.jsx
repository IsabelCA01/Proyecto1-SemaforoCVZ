import "../styles/pacientes.css"
import Paciente1 from "../components/PacienteEjemplo/pacienteejemplo";

const Pacientes = () => {

    return (
      <div className='paall'>
      <div className='pacontainer'>
        <h1 className="pah1">Pacientes a tu nombre</h1>
        <div className="pacolumns">
          <div className="papaciente">
            <Paciente1/>
            <button className="paboton">Ver información del paciente</button>
          </div>
          <div className="papaciente">
            <Paciente1/>
            <button className="paboton">Ver información del paciente</button>
          </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default Pacientes;