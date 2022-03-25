import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
     
    <NavBar />
    
    <ItemListContainer  greeting='Esta es una prop provisoria del Item List ItemListContainer ' />
     

    </div>
  );
}

export default App;
