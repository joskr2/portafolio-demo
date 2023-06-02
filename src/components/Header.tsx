import { FC } from 'react'
import { Link } from 'react-router-dom'
const Header: FC = () => {
  return (
    <header className='p-4 bg-gray-700 text-white'>
      <h1 className='text-xl'>
        Mi portafolio
      </h1>
      <nav>
        <Link to="/" className="mt-2">
          Inicio
        </Link>
        <Link to="/about" className="mt-2 ml-4">
          Acerca de
        </Link>
        <Link to="/contact" className="mt-2 ml-4">
          Contacto
        </Link>
      </nav>
    </header>
  )
}

export default Header