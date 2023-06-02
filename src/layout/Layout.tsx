import { FC } from 'react'
import ILayout from '../interfaces/ILayout'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen '>
      <Header />
      <main className='flex-grow'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout