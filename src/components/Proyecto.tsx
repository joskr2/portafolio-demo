import { FC } from 'react'
import IProyecto from '../interfaces/IProyecto'

const Proyecto: FC<IProyecto> = ({ id, titulo, descripcion }) => {
  return (
    <div key={id} className="card">
      <h2 className='text-xl'>
        {titulo}
      </h2>
      <p className='text-sm'>
        {descripcion}
      </p>
    </div>
  )
}

export default Proyecto