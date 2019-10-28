import React from 'react';
import ProductService from '../../../services/product.service';
import './Product.scss'
import Categories from '../../../Homepage/Categories/Categories';
import { addToCart } from '../../../redux/actions'
import { connect } from 'react-redux';


class createProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    }
  }
  componentDidMount() {
    ProductService.getById(this.props.match.params.id)
      .then(res => res.json())
      .then(product => 
        this.setState({product})
      )
  }
            
  addToCart() {
    this.props.addToCart(this.state.product.id)
  }
    render() {
    return (
      <div className="product-page">
         <div className="categories-sidebar">
            <Categories className="categories" />
        </div>
      <div className="container">
       
        <div className="left-side-product">
            <img className="product.image" width="237px" height="400px" src={`http://localhost:4000/products/${this.state.product.image}`} />
        </div>
        <div className="right-side-product">
            <div className="product-body">
              <div className="product-category">{this.state.product.subcategoryId}</div>
              <div className="product-title">{this.state.product.title}</div>
              <div className="product-description">{this.state.product.description}</div>
            </div>
            <div className="product-price">
                <div className="price">{this.state.product.price}$</div>
                <div className>
                     <button className="cart-btn" onClick={this.addToCart.bind(this)}>Add to cart</button>
                </div>
            </div>
        </div>
      </div>
      </div>
    )
    }
}
export default connect(null, {
  addToCart
})(createProduct);