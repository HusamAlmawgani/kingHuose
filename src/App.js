import React from 'react';

// import components
// import Header from './components/Header';
import Home from './pages/Home/Home';
import Register from "./pages/Rigaster/Rigaster"
// import Footer from './components/Footer';
import { Routes, Route} from "react-router-dom"
import PagProducts from './pages/PagProducts/PagProducts';
import Cart from './components/Cart/Cart';
const App = () => {
  return (
    <div className='w-full max-w-[1440px] mx-auto bg-white'>
      
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route index element={<Home/>}/>
        <Route path='/signup' element={<Register/>}/>
        <Route path='/Products' element={<PagProducts/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
     
    </div>
  );
};

export default App;
