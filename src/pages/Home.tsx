import { FC } from 'react'
import Proyecto from '../components/Proyecto'

const Home: FC = () => {

  const proyectos = [
    {
      id: 1,
      titulo: 'Proyecto 1',
      descripcion: 'Descripción del proyecto 1'
    },
    {
      id: 2,
      titulo: 'Proyecto 2',
      descripcion: 'Descripción del proyecto 2'
    },
    {
      id: 3,
      titulo: 'Proyecto 3',
      descripcion: 'Descripción del proyecto 3'
    },
  ];

  return (
    <div  className='p-4'>
      <h1  className='text-3xl text-center md:text-left '>
        Mis Proyectos
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {
          proyectos.map(proyecto => (
            <Proyecto
              key={proyecto.id}
              id={proyecto.id}
              titulo={proyecto.titulo}
              descripcion={proyecto.descripcion} />
          ))
        }
      </div>
    </div>
  )
}

export default Home