import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
// import Counter from "./components/counter/Counter";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="" element={<ItemListContainer />}/>
            <Route path="/category/:categoryName" element={<ItemListContainer />}/>

            <Route path="/itemDetail/:id" element={<ItemDetailContainer />}/>

            <Route path="/cart" element={<h1>Aca se muestra el carrito</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
