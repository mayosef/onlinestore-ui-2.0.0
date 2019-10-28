import React from 'react';
import {} from 'react-router-dom';
import SubcategoryService from '../services/subcategory.service';
import './Category.scss';
import {Link} from 'react-router-dom'

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.categoryId = this.props.match.params.id;
        this.subcategoryId = this.props.match.params.id2;
        this.state = {
            subcategories:[]
        }
    }
        componentDidMount() {
        SubcategoryService.getByCategoryId(this.categoryId)
            .then(res => res.json())
            .then(subcategories =>  
                this.setState({subcategories})
        )
    }
    render() {
    return (
            <div className="Category">
                Category Page
            {this.state.subcategories.map((subcategory, index) => {
                return <Link to={`/category/${this.categoryId}/subcategory/${subcategory.id}`} 
                 className="subcategory"
                 key={index}>
                <div>
                    <div className="product-container">
                        {subcategory.name}
                    </div>
                </div>
                 </Link>
            })}
            </div>
            )
        }
    }
    export default Category;
