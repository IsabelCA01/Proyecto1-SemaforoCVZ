import './paciente.css';

export const Paciente = ({nombre, raza, especie, fechadeingreso}) => {
    return (
        <div className="card">
            <h1 className='title1'>{nombre}</h1>
            <div className='textCard'>
            <div className='parenglon'>
                <h2 className='patitulo'>Especie:</h2> 
                <h2 className='painfo'>{especie}</h2>
            </div>
            <div className='parenglon'>
                <h2 className='patitulo'>Raza:</h2> 
                <h2 className='painfo'>{raza}</h2>
            </div>
            <div className='parenglon'>
                <h2 className='patitulo'>Ingreso:</h2> 
                <h2 className='painfo'>{fechadeingreso}</h2>
            </div>
            </div>
        </div>
    )
}

export default Paciente