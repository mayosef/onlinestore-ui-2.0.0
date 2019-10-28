import React from 'react';
import './Categories.scss';
import CategoryService from '../../services/category.service'
import categoryService from '../../services/category.service';
import {Link} from 'react-router-dom'


class CategoryPanel extends React.Component {
    constructor(props) {
        super(props) 
        this.categoryId = this.props.match.params.id
        this.state = {
            categories:[],
            editMode:false,
        }
    }
    componentDidMount() {
        CategoryService
        .getAll()
        .then(res => res.json()) 
        .then(categories => 
            this.setState({categories})
        )
    }

    changeState(){
        this.setState({editMode:!this.state.editMode})
    }
    
    removeCategory(categoryId) {
        let categories = this.state.categories
        categories = categories.filter(categories => categories.id !== categoryId)
        categoryService.removeCategory(categoryId)
        .then(() => {
            this.props.history.push('/')
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
            return(
                <div className="admin-panel">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    Category
                                </th>
                                <th>
                                    Image
                                </th>
                                <th>
                                    Option
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.categories.map((category, i) => {
                                return <tr key={category.id}>
                                    <td>
                                        {category.name}
                                    </td>
                                    <td><img className="category-image" src={`http://localhost:4000/categories/${category.image}`} /></td>

                                    <td>
                                        <Link className="btn btn-success" to={`/admin/category-panel/edit/${category.id}`} onClick={this.changeState.bind(this)}>Edit</Link>
                                        <div>
                                        <button type="submit" onClick={this.removeCategory.bind(this, category.id)}
                                        className="btn btn-danger">Remove</button>
                                        </div>
                 
                                    </td>
                                    
                            
                                    
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            )

    }
}


export default CategoryPanel;