import { Paciente } from '../Paciente/paciente';

const Paciente1 = () => {

  return (
    <div style={{flexBasis: "50%"}}>
      <Paciente nombre={"Latte"} fechadeingreso={"07/12/2023"} raza={"Chihuahua"} especie={"Perro"} />
    </div>
  );
};

export default Paciente1