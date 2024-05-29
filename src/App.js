import './App.css';
import MainRoute from './components/router/mainRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer />
    <MainRoute />
    </>
  );
}

export default App;
