import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/checkout' element={(<><Header /> <Checkout /></>)} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={(<><Header /> <Home /></>)} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
