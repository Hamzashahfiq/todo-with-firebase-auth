import { useState, useEffect } from 'react';
import './App.css';
import Routing from './routing/Routing'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import {GetCurrentUser} from './store/action/AuthAction'
import LinearLoading from './component/linearLoading/LinearLoading'





function App() {
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCurrentUser(setLoader));
  }, []);
  return (
    <>
     {loader ? <LinearLoading /> : <Routing />}
     <ToastContainer />
    
    </>
  );
}

export default App;
