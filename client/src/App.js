import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Product from './component/Product';
import Cart from './component/Cart';


function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Product/>}/>
      <Route path='/products/:id' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
