import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">

    <BrowserRouter>

      <NavBar />

      <Routes>

              <Route exact path="/" element={ <ItemListContainer/>}  />
              <Route exact path="/item/:id" element={ <ItemDetailContainer /> }  />
              <Route exact path="/category/:tipo" element={ <ItemListContainer /> }  />
      {/* <ItemListContainer  greeting='Esta es una prop provisoria del Item List ItemListContainer ' />
       */}
      {/* <ItemDetailContainer /> */}

      </Routes>
      

    </BrowserRouter>
     
    

    </div>
  );
}

export default App;
