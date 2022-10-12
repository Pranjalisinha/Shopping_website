import './App.css';
import Home from './component/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Product from './component/Product';
import Cart from './component/Cart';
import AddItem from './component/addCart';
import Register from './component/Register';
import SignIn from './component/Signin';


function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
    <Route path='/Register' element={<Register/>}/>
    <Route path='/signin' element={<SignIn/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Product/>}/>
      <Route path='/products/:id' element={<Cart/>}/>
      <Route path='/addCart' element={<AddItem/>}/>
    </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
