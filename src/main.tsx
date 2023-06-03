import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './layout/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <Layout>
        <Home />
      </Layout>
    ,
  },
  {
    path: "/about",
    element: <Layout>
      <About />
    </Layout>,
  },
  {
    path: "/contact",
    element: <Layout>
      <Contact />
    </Layout>,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
