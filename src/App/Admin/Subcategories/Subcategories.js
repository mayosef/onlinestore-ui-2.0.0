import React from 'react';
import subcategoryService from '../../services/subcategory.service';
import { Formik, Form, Field, } from 'formik';
import {Link} from 'react-router-dom'
import './Subcategories.scss'


class SubcategoryPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subcategories:[],
            subcategory:[],
            editMode:false,
        };
    }
    componentDidMount() {
        subcategoryService.getAll()
        .then(res => res.json())
        .then(subcategories => {
            this.setState({subcategories})
        })
    }

    changeState(){
        this.setState({editMode: !this.state.editMode});
      }

    send(subcategory) {
        subcategoryService.editSubcategory(this.props.match.params.id, subcategory)
            .then(res => res.json())
            .then(subcategory => {
                this.setState({subcategory})
            })
    }
    removeSubcategory(subcategoryId) {
        let subcategories = this.state.subcategories
        subcategories = subcategories.filter(subcategories => subcategories.id !== subcategoryId)
        subcategoryService.removeSubcategory(subcategoryId)
            .then(() => {
                this.props.history.push('/')
            })
    }
    render() {
        return  <div className="admin-panel">
            <table className="table">
                <thead>
                    <tr>
                        <th>Subcategory</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.subcategories.map((subcategory, i ) => {
                            return <tr key={subcategory.id}>
                                <td>
                                    {subcategory.name}
                                </td>
                                <td><img className="subcategory-image" src={`http://localhost:4000/subcategories/${subcategory.image}`} /></td>
                                <td>

                                </td>
                                <td>
                                    <Link className="btn btn-success" to={`/admin/subcategory-panel/edit/${subcategory.id}`} onClick={this.changeState.bind(this)}>Edit</Link>
                                    <button className="btn btn-danger"onClick={this.removeSubcategory.bind(this, subcategory.id)}>Remove</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
            </table>
        </div>

    }
}



export default SubcategoryPanel