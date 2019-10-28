import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import './createProduct.scss'
import Product from '../../../models/product';
import ProductService from '../../../services/product.service';
import subcategoryService from '../../../services/subcategory.service';
import subcategory from '../../../models/subcategory';

class Products extends React.Component {
    constructor(props) {
        super(props)
        this.image = React.createRef();
         this.state = {
            subcategories: [],
            submitting: false
        }
    }
    componentDidMount() {
        subcategoryService
            .getAll()
            .then(res => res.json())
            .then(subcategories => {
                this.setState({subcategories})
            })
    }
    send(values) {
        this.setState({submitting: true});
        ProductService.createProduct(values)
            .then(() =>  {
                this.setState({submitting: false})
                this.props.history.push('/admin/products')
            });
    }
    render() {
        return(
            <div className="container">
                <div className="add-product-form">
                <div>
                    <h2>CREATE PRODUCT</h2>
                </div> 
                    <Formik
                        initialValues={{title:'', subcategoryId:'',price:'',image:'', brand:'', description:''}}
                        validationSchema={Product}
                        onSubmit={this.send.bind(this)}
                        render={({setFieldValue}) => {
                            return      <Form className="col-sm-6">
                            <div className="form-group">
                                <label>Product Title</label>
                                <Field type="text" name="title" />
                                <ErrorMessage name="title" component="div" className="title-alert" />
                            </div>
                             <div className="form-group">    
                                <label>Price</label>
                                <Field type="number" name="price" />
                                <ErrorMessage name="price" component="div" className="title-alert" />
                            </div>
                            <div className="form-group">
                                <label>Category</label>
                                <Field type="text" name="subcategoryId" component="select">
                                    <option defaultValue>choose sub</option>
                                    {this.state.subcategories.map((subcategory, i) => {
                                        return <option key={i} value={subcategory.id}>{subcategory.name}</option>
                                    })}
                                </Field>
                            </div>
                            <div className="form-group">
                                <label>Brand</label>
                                <Field type="text" name="brand" />
                                <ErrorMessage name="brand" component="div" className="brand-alert" />
                            </div>
                             <div className="form-group">    
                                <label>Description</label>
                                <textarea rows="4" cols="50" type="textarea" name="description" />
                                <ErrorMessage name="description" component="textarea" className="description-alert" />
                          </div>
                            <div className="form-group">
                                <label>Image</label>
                                <input type="file" name="image" onChange={(event) => {
                                    setFieldValue('image', event.currentTarget.files[0])
                                }} />
                                <ErrorMessage name="image" component="div" className="image-alert" />
                            </div>
                            <div className="form-group">
                                <input type="submit"
                                        value="Submit"
                                        className="btn btn-primary"
                                        disabled={this.state.submitting}
                                       />
                            </div>
                        </Form>
                        }}>
                    </Formik>
                </div>
            </div>
        )
    }
}

export default Products; 