import { FC } from 'react'

const Home: FC = () => {
  return (
    <>
      <h1 className='text-3xl'>
        Mis Proyectos
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {
          // Aquí va el render de la lista de proyectos (usando un componente PROYECTO)
        }
      </div>

    </>
  )
}

export default Home