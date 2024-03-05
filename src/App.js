import './App.css';
import AppNavBar from './components/AppNavBar';
import {Routes, Route} from "react-router-dom"
import Home from './components/Home';
import ContactList from './components/ContactList';
import AddEdit from './components/AddEdit';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAuthUser } from './redux/actions/authActions';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAuthUser())
  }, [])
  return (
    <div className="App">
      <AppNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-list" element={<PrivateRoute><ContactList /></PrivateRoute>} />
        <Route path="/add" element={<PrivateRoute><AddEdit /></PrivateRoute>} />
        <Route path="/edit/:id" element={<PrivateRoute><AddEdit /></PrivateRoute>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
