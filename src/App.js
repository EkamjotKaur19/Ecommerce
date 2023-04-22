import React, { useState, useEffect } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Data from "./components/Data"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import Sdata from "./components/shops/Sdata"
import Ndata from "./components/newarrivals/Ndata"
import Products from "./common/Products/Products"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Signup from "./common/Signup/Signup"
import {auth} from './firebase';
import Login2 from "./common/Login2/Login2"
import { Card } from "./common/Card/Card"

function App() {

  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  const { productItems } = Data
  const { shopItems } = Sdata
  const { NewItems } = Ndata
  const [CartItem, setCartItem] = useState([]);
  const [darkMode, setDarkMode]=useState(false);

  useEffect(() => {
    if(darkMode){
      document.body.classList.add('dark');
      

    }
    else{
      document.body.classList.remove('dark');
    }
  }, [darkMode]);
  
  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <>
      <Router>
        <Header CartItem={CartItem} darkMode={darkMode} name={userName} />
        <div className="head-btns">
          <button type="button" className={darkMode? "btn btn-light pos":"btn btn-dark pos"} data-bs-toggle="button" onClick={() => setDarkMode(!darkMode)} >{darkMode?'Light Mode' : 'Dark Mode'}</button>
          <h4 className={darkMode? "user-head-dark":"user-head"}>Hy {userName} , See what's new for you on our store!</h4>
        </div>
        <Switch>
        
          <Route path='/' exact>
            <Pages  name={userName} productItems={productItems} addToCart={addToCart} shopItems={shopItems} NewItems={NewItems} darkMode={darkMode}/>
          </Route>
          <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} darkMode={darkMode}/>
          </Route>
          <Route path='/products' exact>
            <Products darkMode={darkMode}/>
          </Route>
          <Route path='/login' exact>
            <Login2 />
          </Route>

          <Route path='/about' exact>
            <About darkMode={darkMode}/>
          </Route>

          <Route path='/contact' exact>
            <Contact darkMode={darkMode}/>
          </Route>
          

          <Route path='/register' exact>
            <Signup />
          </Route>

          <Route path='/checkout' exact>
            <Card />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
