import { useState } from "react";
import "../styles/singup.css";
import { useAuth }  from "../contexts/authContext";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const [user, setUser] = useState({
    //nombre: "",
    //apellido: "",
    email: "",
    password: "",
  });

  const { singupfunction } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState();


  const handleChange = ({target: {name,value}}) => {
   setUser({...user, [name]: value})
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError("")
    try {
      await singupfunction(user.email, user.password);
      navigate("/");
    }
    catch (error){
      console.log(error.code)
      if (error.code === "auth/weak-password"){
        setError("La contraseña debe tener más de 6 carácteres.")
      }
      else if (error.code === "auth/missing-password"){
        setError("Debe elegir una contraseña")
      }
      else if( error.code === "auth/invalid-email"){
        setError("Email invalido")
      }
      else if( error.code === "auth/missing-email"){
        setError("Debe ingresar un email")
      }
      else if( error.code === "auth/email-already-in-use"){
        setError("El email ya se encuentra registrado")
      }
      else{
      setError(error.message)}
    }};

    return (
      <div className='suall'>
      <div className='sucontainer'>
        <div className="sucolumns">
          <div className="sucolumna1">
            <img className="sulogo" src="src\assets\CVZ.png" alt="centered image"/>
          </div>
          <div className="sucolumna2">
          <h1 className='sutitle'>Crear Sesión</h1>
          <p className="sutext">Ten en cuenta que debes registrarte usando el email que diste en la clínica al momento de ingreso del paciente.</p>
            <form onSubmit={handleSubmit}>
              <div className="suinput">
              <input type="nombre" name='nombre' placeholder="Nombre" onChange={handleChange}></input>
              </div>
              <div className="suinput">
              <input type="apellido" name='apellido' placeholder="Apellido" onChange={handleChange}></input>
              </div>
              <div className="suinput">
              <input type="email" name='email' placeholder="Email" onChange={handleChange}></input>
              </div>
              <div className="suinput">
              <input type="password" placeholder='Contraseña' name='password' id='password' onChange={handleChange}></input>
              </div>
              <div className="suinput">
              <input type="password" placeholder='Repita la contraseña' name='passwordAgain' id='passwordAgain' onChange={handleChange}></input>
              </div>
              <div className="error">
              {error && <p>{error}</p>}
              </div>
              <button className="suboton"> Crear Sesión </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default Register;