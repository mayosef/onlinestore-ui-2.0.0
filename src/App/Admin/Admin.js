import React from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom"
import Products from './Products/Products';
import Categories from './Categories/Categories'
import UserService from '../services/user.service';
import createProduct from './Products/createProduct/createProduct';
import createCategory from './Categories/createCategory/createCategory';
import createSubcategory from './Subcategories/CreateSubcategory/createSubcategory'
import Subcategories from './Subcategories/Subcategories'
import Users from './Users/Users';
import './Admin.scss'
import editCategory from './Categories/editCategory/editCategory';
import editProduct from './Products/editProduct/editProduct';
import editSubcategory from './Subcategories/editSubcategory/editSubcategory';
class Admin extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        UserService
            .me()
            .then(res => res.json())
            .then(user => {
                if(! user.isAdmin) {
                    this.props.history.push('/')
                }
            })
    }
    render() {
        return (
            <Router>
                <div className="admin-panel">
                <div className="row">
                    <div className="col-sm-3">
                        <ul className="list-group">
                            <ul>
                                <li className="list-group-item">
                                        <Link className="list-item" to="/admin/product-panel/products">Products</Link>
                                        <Link className="list-item" to="/admin/product-panel/create-product">Create Product</Link>
                                </li>
                            </ul>
                            <ul>
                                <li className="list-group-item">
                                    <Link className="list-item" to="/admin/category-panel/categories">Categories</Link>
                                    <Link className="list-item" to="/admin/category-panel/create-category">Create Category</Link>
                                </li>
                            </ul>
                            <ul>
                                    <li className="list-group-item">
                                        <Link className="list-item" to="/admin/subcategory-panel/subcategories">Subcategories</Link>   
                                        <Link className="list-item" to="/admin/subcategory-panel/create-subcategory">Create Subcategory</Link>
                                    </li>
                            </ul>
                            <ul>
                                <li className="list-group-item">
                                    <Link className="list-item" to="/admin/users-panel/users">Users</Link>
                                </li> 
                            </ul>           
                        </ul>
                    </div>
                        <div className="col-sm-9">
                            <Route path="/admin/product-panel/products" component={Products} />
                            <Route path="/admin/product-panel/create-product" component={createProduct} />
                            <Route path="/admin/category-panel/create-category" component={createCategory} />
                            <Route path="/admin/category-panel/categories" component={Categories} />
                            <Route path="/admin/subcategory-panel/create-subcategory" component={createSubcategory} />
                            <Route path="/admin/subcategory-panel/subcategories" exact component={Subcategories} />
                            <Route path="/admin/users-panel/users/" component={Users} />


                            <Route path="/admin/category-panel/edit/:id/" component={editCategory} />
                            <Route path="/admin/product-panel/edit/:id/" component={editProduct} />
                            <Route path="/admin/subcategory-panel/edit/:id/" component={editSubcategory} />
                        </div>
                    </div>
                </div>
            </Router>
            
            )
        }
    }
export default Admin