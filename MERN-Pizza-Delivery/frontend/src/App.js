import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import $ from 'jquery';
import Popper from 'popper.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Ordersscreen from './screens/Ordersscreen';
import Adminscreen from './screens/Adminscreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homescreen />} exact />
          <Route path="/cart" element={<Cartscreen />} exact />
          <Route path="/register" element={<Registerscreen />} exact />
          <Route path="/login" element={<Loginscreen />} exact />
          <Route path="/orders" element={<Ordersscreen />} exact />
          <Route path="/admin/*" element={<Adminscreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
