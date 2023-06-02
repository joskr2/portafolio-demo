import { FC } from 'react'
const Header: FC = () => {
  return (
    <header className='p-4 bg-gray-700 text-white'>
      <h1 className='text-xl'>
        Mi portafolio
      </h1>
      <nav>
        <a href="/" className="mt-2">
          Inicio
        </a>
        <a href="/about" className="mt-2">
          Acerca de
        </a>
        <a href="/contact" className="mt-2">
          Contacto
        </a>
      </nav>
    </header>
  )
}

export default Header