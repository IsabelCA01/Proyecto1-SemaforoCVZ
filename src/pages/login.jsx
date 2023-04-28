import "../styles/login.css";


const LogIn = () => {
    return (
      <div className='loall'>
      <div className='locontainer'>
        <div className="locolumns">
          <div className="locolumna1">
            <img className="lologo" src="src\assets\CVZ.png" alt="centered image"/>
          </div>
          <div className="locolumna2">
          <h1 className="loh1">Iniciar Sesión</h1>
            <form>
              <div className="loinput">
              <input type="email" name='email' placeholder='Email'></input>
              </div>
              <div className="suinput">
              <input type="password" placeholder='Contraseña' name='password' id='password'></input>
              </div>

              <button className="loboton">Iniciar Sesión</button>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default LogIn;