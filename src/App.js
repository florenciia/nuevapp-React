import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartProvider } from './components/CartContext/CartContext.jsx';
import { CarritoFinal } from './components/CarritoFinal/CarritoFinal';
import CartWidget from './components/CartWidget/CartWidget';
import {Cart} from './components/Cart/Cart';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <CartProvider>

      <NavBar />

        <Routes>

                <Route exact path="/" element={ <ItemListContainer/>}  />
                <Route exact path="/item/:id" element={ <ItemDetailContainer /> }  />
                <Route exact path="/category/:tipo" element={ <ItemListContainer /> }  />
                <Route exact path="/CarritoFinal" element={ <CartWidget /> }  />
                <Route exact path="/CarritoFinal" element={ <CarritoFinal /> }  />
                <Route exact path="/Cart" element={ <Cart/> }  />
                

        {/* <ItemListContainer  greeting='Esta es una prop provisoria del Item List ItemListContainer ' />
        */}
        {/* <ItemDetailContainer /> */}

        </Routes>

      </CartProvider>

    </BrowserRouter>
     
    

    </div>
  );
}

export default App;