import "../styles/pacientes.css"
import Paciente1 from "../components/PacienteEjemplo/pacienteejemplo";
import {useAuth} from "../contexts/authContext";

const Pacientes = () => {
  const {user, logoutFunction, loading } = useAuth();
  console.log(user);

  const handleLogout = async () => {
    await logoutFunction();
  }

  if (loading) return <h1>Loading...</h1>;
    
  return (
    <div className='paall'>
      <div className='pacontainer'>
        <h1 className="pah1">Hola { user.email }</h1>
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
        <div className="logoutbtn">
        <button onClick={handleLogout} className="paboton">Cerrar Sesión</button>
        </div>
      </div>
    </div>
  );
};
  
  
  export default Pacientes;