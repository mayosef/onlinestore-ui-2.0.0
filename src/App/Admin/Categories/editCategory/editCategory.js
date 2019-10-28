import React from 'react';
import Categories from '../../../models/category'
import {Formik, Form, Field } from 'formik';
import categoryService from '../../../services/category.service';


class editCategory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category:[],
            EditMode:false,
        }
    }
    componentDidMount() {
        categoryService
        .getById(this.props.match.params.id)
        .then(res => res.json())
        .then(category => {
            this.setState({category})
        })
    }
    send(category) {
        categoryService
        .editCategory(this.state.category.id, category)
        .then(res => res.json())
        .then(category => {
                this.setState({category})
            })
    }
   changeState(){
        this.setState({editMode: !this.state.editMode});
    }

    editCategoryImage(image) {
        categoryService.editCategoryImage(image, this.categoryId)
            .then(res => {
                res.json()
            })
    }
    editCategory(values) {
        categoryService.editCategory(values, this.categoryId)
        .then(res => {
            res.json()
        })
            .then(category => {
                this.setState({category})
                console.log(values)
            })
    }

    render() {
           return(
                <div className="container">
                    <div className="edit-product">
                        <a href="#" onClick={this.changeState.bind(this)} >Cancel Edit</a>
                    </div>
                    <div className="add-product-form">
                        <div>
                            <h2>Edit category</h2>
                        </div>
                     </div>
                        <Formik
                        initialValues={{
                        name:this.state.category.name}}
                        onSubmit={this.send.bind(this)}
                        render={({setFieldValue}) => {
                            return <Form>
                            <div className="form-group">
                                <label>Category name</label>
                                <Field type="text" name="name" className="title" placeholder={this.state.category.name} />
                            </div>
                            <div className="form-group">
                                <label>Change Image</label>
                                <input type="file" name="image" onChange={(event) => {
                                    setFieldValue('image', event.currentTarget.files[0])
                                }}/>
                            </div>
                            <div>
                                <input type="submit" className="btn btn-primary" />
                            </div>
                        </Form>
                        }}
                        >
                        </Formik>
                </div>
            )

    }
}
export default editCategory; 