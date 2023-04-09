import { RouterProvider } from 'react-router-dom';
import './App.css';
import { privateRoutes } from './routes/privateRoutes';
import { publicRoutes } from './routes/publicRoutes';
import { AuthProvider,useAuthContext } from './providers/authProvider';
import { ToastContainer } from 'react-toastify';

function App() {
  const { setIsAuth,isAuth } = useAuthContext();

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
