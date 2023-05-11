import { Paciente } from '../Paciente/paciente';

const Paciente2 = () => {

    return (
      <div style={{flexBasis: "50%"}}>
        <Paciente nombre={"Amelie"} fechadeingreso={"08/01/2023"} raza={"Criollo"} especie={"Gato"} />
      </div>
    );
  };


  export default Paciente2;