import React from 'react';
import { Link } from 'react-router-dom';
import subcategoryService from '../../../services/subcategory.service';
import './Subcategorymenu.scss';
import categoryService from '../../../services/category.service';

class Subcategorymenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categories:[],
            subcategories:[]
        }
    }
    componentDidMount() {
        categoryService.getAll()
        .then(res => res.json())
        .then(categories => {
            this.setState({categories})
            console.log(categories)
        })
        subcategoryService.getAll()
        .then(res => res.json())
        .then(subcategories => {
            this.setState({subcategories})
        })
    }

    render() {
        return (
            <div className="nav bar navbar-expand-lg navbar-light bg-light">
                <div className="list-item">
                    {this.state.subcategories.map((subcategory, i) => {
                        return <Link to={`/category/${subcategory.categoryId}/subcategory/` + subcategory.id}
                        className="subcategory-tabs" key={i}>
                            <ul>
                                <li className="subcategory-tab-name">{subcategory.name}</li>
                            </ul>
                        </Link>
                    })}
                </div>
            </div>
        )
    }
}


export default Subcategorymenu;