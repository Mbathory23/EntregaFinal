import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'
import NavbarBootstrapHTML from './components/NavbarBootstrapHTML';
import NavbarReactBootstrap from './components/NabvarReactBootstrap';
import ComponenteConChildren from './components/EjemploChildren/ComponenteConChildren';
import EjemploEstado from './components/EjemploEstado';
import EjemploUseEffect from './components/EjemploUseEffect/EjemploUseEffect';
import EjemploPromise from './components/EjemploPromise/EjemploPromise';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import { CartProvider } from './context/CartContex';
import CartView from './components/CartView';
import Checkout from './components/Checkout';




function App() {

  console.log('App')

  return (
    <CartProvider>

<BrowserRouter>
      <NavbarReactBootstrap/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Bienvenidos a la tienda Gamer' />}/>
        <Route path='/products/:category'element={<ItemListContainer  greeting='Bienvenidos a la categoria'/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<CartView/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      </BrowserRouter>



    </CartProvider>
   
      
  )
}

export default App
