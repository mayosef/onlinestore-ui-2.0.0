import React from 'react';
import productService from '../../services/product.service';
import './Products.scss'
import {Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import category from '../../models/category';
import categoryService from '../../services/category.service';
import subcategoryService from '../../services/subcategory.service';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.productId = this.props.match.params.id
        this.state = {
            products:[],
            product:[],
            editMode:false
        };
    }

    componentDidMount() {
        productService.getAll()
        .then(res => res.json())
        .then(products => {
            this.setState({products})
            console.log(products)
        })
    }

    changeState(){
        this.setState({editMode:!this.state.editMode})
      }

    send(product) {
        productService.editProduct(this.state.product.id, product)
            .then(res => res.json())
            .then(product => {
                this.setState({product})
            })
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }
    removeProduct(productId) {
        let products = this.state.products
        products = products.filter(products => products.id !== productId)
        productService.removeProduct(productId)
        .then(() => {
            this.props.history.push('/')
        })
    }
    render() {
           return ( 
           <div>
                <h2>Products</h2>
                <div className="d-flex justify-content-end mb-3">

                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Brand</th>
                            <th>Description</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map((product, i) => {
                            return <tr key={i}>
                                        <td>{product.title}</td>
                                        <td><img className="product-image" src={`http://localhost:4000/products/${product.image}`} /></td>
                                        <td>${product.price}</td>
                                        <td>{product.subcategoryName}</td>
                                        <td>{product.brand}</td>
                                        <td>{this.description}</td>
                                        <td>
                                            <Link to={`/admin/product-panel/edit/${product.id}`} onClick={this.changeState.bind(this)}>Edit</Link>
                                            <button type="submit" onClick={this.removeProduct.bind(this, product.id)}
                                        className="btn btn-danger">Remove</button>
                                        </td>
                                    </tr>
                        })}
                    </tbody>
                </table>
            </div>
            )
        }
    }
export default Products;