import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Register from './Register/Register';
import Login from './Login/Login';
import Home from './Homepage/Home';
import Header from './Header/Header';
import Profile from './Profile/Profile';
import Category from './Category/Category.js'; 
import Cart from './Cart/Cart.js';
import Admin from './Admin/Admin.js';
import NoMatch from '../NoMatch.js';
import Categorymenu from './Header/CategoryMenu.js/Categorymenu';
import SubCategory from './Category/Subcategory/Subcategory';
import Product from './Category/Subcategory/Product/Product'
import Subcategorymenu from './Header/CategoryMenu.js/SubcategoryMenu/Subcategorymenu';
import Footer from './Footer/Footer';

class App extends React.Component {
  render() {
  return (
    <Router>
      <header>
        <Header />
        <Categorymenu />

      </header>
      <main>
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login"  component={Login} />
          <Route path="/cart" component={Cart} />
          <Route path="/register"  component={Register} />
          <Route path="/user/me" component={Profile} />
          <Route path="/category/:id" exact component={Category} />
          <Route path="/category/:id/subcategory/:id2" exact component={SubCategory} />
          <Route path="/category/:id/subcategory/:id2/product/:id" component={Product} />
          <Route path="/admin" component={Admin} />
          <Route component={NoMatch} />

          <Route path="/category/:id/subcategory/" exact component={Categorymenu} />
          <Route path="/category/:id/subcategory/:id2" exact component={Subcategorymenu} />
        </Switch>
       <footer>
          <Footer />
       </footer>
      </main>
    </Router>
  );
  }
}

export default App;
