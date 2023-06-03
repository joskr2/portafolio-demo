import { Component } from 'react'
import { Link } from 'react-router-dom'

export class HeaderClassComponent extends Component {

  // state = {
  //   cart: [],
  //   total: 0
  // }

  // add = () => {
  //   this.setState({
  //     cart: ['ice cream'],
  //     total: 5
  //   })
  // }

  // saludar = () => {
  //   console.log('Hola')
  // }

  render() {
    return (
      <header className='p-4 bg-gray-700 text-white flex flex-col md:flex-row md:justify-between'>
        <h1 className='text-xl '>
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
}

export default HeaderClassComponent