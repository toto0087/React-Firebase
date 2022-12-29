import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import Form from "./components/form/Form";
import CartContextProvider from "./context/CartContext"
import Cart from "./components/cart/Cart";

// import Counter from "./components/counter/Counter";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
            <Routes>
                <Route path="" element={<ItemListContainer />}/>
                <Route path="/category/:categoryName" element={<ItemListContainer />}/>

                <Route path="/checkout" element={<Form />}/>

                <Route path="/itemDetail/:id" element={<ItemDetailContainer />}/>

                <Route path="/cart" element={<Cart />}/>
              </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
