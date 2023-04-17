import { RouterProvider } from 'react-router-dom';
import './App.css';
import { privateRoutes } from './routes/privateRoutes';
import { publicRoutes } from './routes/publicRoutes';
import { ToastContainer } from 'react-toastify';
import { isAuthenticated } from './utils/auth/auth';


function App() {
  const isAuth = isAuthenticated();

  return <>
    <RouterProvider router={isAuth ? privateRoutes : publicRoutes} />
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </>
}

export default App;
