import './App.css';

import Landing from './components/landing';
import Website from './pages/website';
import Design from './pages/design';
import ErrorPage from './components/404';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dev from './pages/www';
import Resume from './pages/resume';
import About from './pages/about';
import TestComponent from './components/dev';

function App() {

  const router = createBrowserRouter(
    [
      {
        path:"/",
        element: <Landing />,
        errorElement: <ErrorPage />
      },
      {
        path: "/website",
        element: <Website />
      },
      {
        path: "/design/:collection",
        element: <Design />
      },
      {
        path: "/design",
        element: <Design />
      },
      {
        path:"/www",
        element: <Dev />
      },  
      {
        path: "/resume",
        element: <Resume />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/dev",
        element: <TestComponent />
      }
    ]
);

    return (
      <div className="App">
        <RouterProvider router={router} />
      </div>
    );

}

export default App;
