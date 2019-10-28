import React from 'react';
import subcategoryService from '../../../services/subcategory.service';
import { Formik, Form, Field, } from 'formik';
import {Link} from 'react-router-dom'
import category from '../../../models/category';
import categoryService from '../../../services/category.service';


class editSubcategory extends React.Component {
    constructor(props) {
        super(props);
        this.subcategoryId = this.props.match.params.id
        this.state = {
            categories:[],
            subcategory:[],
            editMode:false,
        };
    }
    componentDidMount() {
        subcategoryService.getById(this.subcategoryId)
        .then(res => res.json())
        .then(subcategory => {
            this.setState({subcategory})
        })
        categoryService.getAll()
        .then(res => res.json())
        .then(categories => {
            this.setState({categories})
            console.log(categories)
        })
    }

    send(subcategory) {
        subcategoryService.editSubcategory(this.subcategoryId, subcategory)
            .then(res => res.json())
            .then(subcategory => {
                this.setState({subcategory})
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

    render() {
            return (
                <div className="container">
                    <div className="edit-product">
                    </div>
                    <div className="add-product-form">
                        <div>
                            <h2>Edit subcategory</h2>
                        </div>
                     </div>
                        <Formik
                        initialValues={{
                        name:this.state.subcategory.name,
                        categoryId:this.state.subcategory.categoryId}}
                        onSubmit={this.send.bind(this)}>
                        <Form>
                            <div className="form-group">
                                <label>Subcategory name</label>
                                <Field type="text" name="name" className="name" values={this.state.subcategory.name} />
                            </div>
                            <div className="form-group">
                                <label>Choose Category</label>
                                <Field type="text" name="categoryId" className="categoryId" component="select">
                                    <option defaultValue={this.state.subcategory.categoryId}></option>
                                    {this.state.categories.map((category, i) => {
                                        return <option key={i} value={category.id}>{category.name}</option>
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

export default editSubcategory;