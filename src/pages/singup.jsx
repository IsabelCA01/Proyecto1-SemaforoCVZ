import { useState } from "react";
import "../styles/singup.css"

const Register = () => {

  const [user, setUser] = useState({
    //nombre: "",
    //apellido: "",
    email: "",
    password: "",
})

  const handleChange = ({target: {name,value}}) => {
   setUser({...user, [name]: value})
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(user);
  }

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

              <button className="suboton"> Crear Sesión </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default Register;