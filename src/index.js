import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './providers/authProvider';
import { QueryClient,QueryClientProvider } from 'react-query'
import 'react-toastify/dist/ReactToastify.css';
import './config/axios'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      stateTime: Math.INFINITY,
      retry: false,
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <App>
        </App>
      </AuthProvider>
    </ QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
