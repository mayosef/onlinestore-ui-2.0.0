import React from 'react';
import subcategoryService from '../../../services/subcategory.service';
import categoryService from '../../../services/category.service';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Product from '../../../models/product'
import ProductService from '../../../services/product.service'
import SubCategory from '../../../Category/Subcategory/Subcategory';
import subcategory from '../../../models/subcategory';


class CreateSubcategory extends React.Component {
        constructor(props) {
            super(props);
            this.image = React.createRef();
            this.state = {
                categories:[],
                submitting:false
            }
            console.log(this.state.categories)
        }
        componentDidMount() {
            categoryService
            .getAll()
            .then(res => res.json())
            .then(categories => {
                this.setState({categories})
            })
        }
        send(values) {
            this.setState({submitting:true})
            subcategoryService.createSubcategory(values)
            .then(() => {
                this.setState({submitting:false})
                this.props.history.push('/admin/subcategory-panel/subcategories')
            })
        }
        render() {
            return (
                <div className="container">
                    <div>
                        <div>
                            Create subcategorty
                        </div>
                    <Formik
                    initialValues={{name:'', image:'', categoryId:''}}
                    validationSchema={subcategory}
                    onSubmit={this.send.bind(this)}
                    render={({setFieldValue}) => {
                        return <Form className="col-sm-6">
                            <div className="form-group">
                                <label>Subcategory name</label>
                                <Field type="text" name="name" />
                            </div>
                            <div className="form-group">
                                <label>Choose category</label>
                                <Field type="text" name="categoryId" component="select">
                                    <option defaultValue>Choose</option>
                                    {this.state.categories.map((category, i) => {
                                        return <option key={i} value={category.id}>{category.name}</option>
                                    })}
                                </Field>
                            </div>
                            <div className="form-group">
                                <label>iamge</label>
                                <input type="file" name="image" onChange={(event) => {
                                    setFieldValue('image', event.currentTarget.files[0])
                                }} />
                            </div>
                            <div className="form-group">
                                <input type="submit" 
                                value="Create"
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
export default CreateSubcategory;