/** @jsxImportSource theme-ui */
import './App.css';

import Landing from './components/landing';
import Website from './pages/website';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

  const router = createBrowserRouter(
    [
      {
        path:"/",
        element: <Landing />
      },
      {
        path: "/website",
        element: <Website />
      }
    ]
);

    return (
      <div className="App" sx={{ backgroundColor: 'secondaryInverse' }}>
        <RouterProvider router={router} />
      </div>
    );

}

export default App;
