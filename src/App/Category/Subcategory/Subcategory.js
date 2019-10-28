import React from 'react';
import {} from 'react-router-dom';
import productService from '../../services/product.service';
import {Link} from 'react-router-dom'
import './Subcategory.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faShoppingBag, faEye, faEyeSlash ,  } from '@fortawesome/free-solid-svg-icons'
import { addToCart } from '../../redux/actions'
import { connect } from 'react-redux';
import { throwStatement } from '@babel/types';

class SubCategory extends React.Component {
    constructor(props) {
        super(props);
        this.categoryId = this.props.match.params.id
        this.subcategoryId = this.props.match.params.id2;
        this.productId = this.props.match.params.id3
        this.state = {
            products:[],
        }
    }
        componentDidMount() {
        productService.getBySubCategoryId(this.categoryId, this.subcategoryId)
            .then(res => res.json())
            .then(products => this.setState({products})
            )
        productService.getAll()
        .then(res => res.json())
        .then(product => {
            this.setState({product})
            console.log(product)
        })
    }
    addToCart() {
        this.props.addToCart(this.state.product.id)
        console.log(this.productId)
      }
    render() {
    return (
            <div className="container">
                <div className="h3">
                    <h2>Products page</h2>
                </div>
                <div className="row">
                    {this.state.products.map((product, index) => {
                        return <Link to={`/category/${this.categoryId}/subcategory/${this.subcategoryId}/product/${product.id}`}  className="col-md-3 col-sm-6" key={index}>
                <div className="product-grid6">
                    <div className="product-image6">
                    <img  src={'http://localhost:4000/products/' + product.image} />
                    </div>
                    <div>
                        <div className="product-content">
                            {product.title}
                        </div>
                        <div>
                            {product.price}$
                        </div>
                    </div>
                    <div className="social">
                        <div>
                            <FontAwesomeIcon  icon={faEye} className="icon" size="x">View product</FontAwesomeIcon>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faShoppingBag} className="icon" size="x" onClick={this.addToCart.bind(this)}>
                            Add to card
                            </FontAwesomeIcon>
                        </div>
                    </div>
                   
                </div>
                 </Link>
            })}
            </div>
            </div>
            )
        }
    }
    export default connect(null, {
        addToCart
    })(SubCategory);
