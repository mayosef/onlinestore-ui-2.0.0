import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome , faSignInAlt, faUserPlus, faDog, faIdCard, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import ButtonCart from './ButtonCart/ButtonCart'
import cookie from 'react-cookies';
import categoryService from '../services/category.service';



class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories:[]
      }
  }

  
  
  // componentDidMount() {
  //       const el = document.querySelector('nav');
  //       this.setState({top: el.offsetTop, height: el.offsetHeight});
  //       window.addEventListener('scroll', this.handleScroll);
  //   }
  
  componentDidUpdate() {
        this.state.scroll > this.state.top ? 
            document.body.style.paddingTop = `${this.state.height}px` :
            document.body.style.paddingTop = 0;
    }
  
  logout() {
      cookie.remove('user')
    }

    render() {
        return (
            
            <header>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
              
                    <ul className="ul-menu">
                      <li className="nav-item"><Link to="/">Home</Link>
                      <FontAwesomeIcon icon={faHome} size="1x" className="icons-menu" />
                      </li>
                      <li className="nav-item"><Link to="/user/me">Profile</Link>
                        <FontAwesomeIcon icon={faIdCard} />
                      </li>
                      <li className="nav-item"><Link to="/cart">Cart</Link>
                        <FontAwesomeIcon icon={faDog} />
                      </li>
                      <li className="nav-item">
                        <Link to="/admin">Admin</Link>
                      </li>                  
                    </ul>
                    <ul className="nav  navbar-right">
                      <li className="nav-item">
                        <Link to="/login">Login</Link>
                        <FontAwesomeIcon icon={faSignInAlt} /> 
                      </li>
                      <li className="nav-item"><Link to="/register">Register</Link>
                        <FontAwesomeIcon icon={faUserPlus} /> 
                      </li>
                    </ul>
                <div className="cart">
                  <ButtonCart className="cart-btn" />
                  </div>
                  <button onClick={this.logout.bind(this)}>Logout</button>

             </nav>

            </header>
            
        )
    }
}

 export default Header;
