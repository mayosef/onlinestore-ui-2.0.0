import React from 'react';
import './createCategory.scss';
import Categories from '../../../models/category'
import CategoryService from '../../../services/category.service'
import {Formik, Form, Field } from 'formik';


class createCategory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categories:[],
            submitting:false
        }
    }
    send(values) {
        console.log(values)
        this.setState({submitting:true});
        CategoryService.createCategory(values)
            .then(() => {
            this.setState({submitting:false})
            this.props.history.push('/admin/category-panel/categories/')
            })
            
    }
    render() {
        return (
            <div className="container">
                <div className="add-category-form">
                    <div>
                        <h2>Create Category</h2>
                    </div>
                    <Formik
                    initialValues={{name:'', image:''}}
                    validationSchema={Categories}
                    onSubmit={this.send.bind(this)}
                    render={({setFieldValue}) => {
                        return <Form className="col-sm-6">
                            <div className="form-group">
                                <label>Category Name</label>
                                <Field type="text" name="name" />
                            </div>
                            <div className="form-group">
                                <label>Image:</label>
                                <input type="file" name="image" onChange={(event) => {
                                    setFieldValue('image', event.currentTarget.files[0])
                                }} />
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


export default createCategory;
