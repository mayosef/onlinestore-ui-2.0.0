import React from 'react';
import {Formik, Form, Field, ErrorMessage } from 'formik';
import productService from '../../../services/product.service';
import {Link} from 'react-router-dom'
import subcategoryService from '../../../services/subcategory.service';
import { tsParenthesizedType } from '@babel/types';
import category from '../../../models/category';



class editProduct extends React.Component {
    constructor(props) {
        super(props);
        this.productId = this.props.match.params.id
        this.state = {
            subcategories:[],
            products:[],
            product:[],
        };
    }
    componentDidMount() {
        subcategoryService.getAll()
        .then(res => res.json())
        .then(subcategories => {
            this.setState({subcategories})
            console.log(subcategories)
        })
        productService.getAll()
        .then(res => res.json())
        .then(products => {
            this.setState({products})
            console.log(products)
        })

    }


    send(product) {
        productService.editProduct(this.productId, product)
            .then(res => res.json())
            .then(product => {
                this.setState({product})
                console.log(this.state.product.id)
            })
    }

    render() {
            return(
                <div className="container">
                    <div className="edit-product">
                    </div>
                    <div className="add-product-form">
                        <div>
                            <h2>Edit product</h2>
                        </div>
                     </div>
                        <Formik
                        initialValues={{
                        title:this.state.product.title,
                        price:this.state.product.price,
                        brand:this.state.product.brand,
                        description:this.state.product.description,
                        subcategoryId: this.state.product.subcategoryId}}
                        enableReinitialize={true}
                        onSubmit={this.send.bind(this)}>
                        <Form>
                            <div className="form-group">
                                <label>Product title</label>
                                <Field type="text" name="title" className="title" value={this.state.product} />
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <Field type="text" name="price" className="price" placeholder={this.state.product.price} />
                            </div>
                            <div className="form-group">
                                 <label>Product brand</label>
                                 <Field type="text" name="brand" className="brand" placeholder={this.state.product.brand} />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <Field type="text" name="description" className="description" placeholder={this.state.product.description} />
                            </div>
                            <div className="form-group">
                                <label>Choose subcategory</label>
                                <Field type="text" name="subcategoryId" component="select">
                                    <option defaultValue>{this.state.product.subcategoryId}</option>
                                    {this.state.subcategories.map((subcategory, i) => {
                                        return <option key={i} value={subcategory.id}>{subcategory.name}</option>
                                    })}

                                </Field>
                            </div>
                            <div>
                                <input type="submit" className="btn btn-primary" />
                            </div>
                        </Form>
                    </Formik>
                </div>
            )
    }
}

export default editProduct; 