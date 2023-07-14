import Header from '../Header/Header';
import Home from '../Home/Home';
import Checkout from '../Checkout/Checkout';
import Login from '../Login/Login';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/checkout' element={(<><Header /> <Checkout /></>)} />
          <Route path='/' element={(<><Header /> <Home /></>)} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
