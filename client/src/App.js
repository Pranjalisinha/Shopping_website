import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Product from './component/Product';


function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Product/>}/>
    </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
