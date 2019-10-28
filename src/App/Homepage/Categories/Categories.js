import React from 'react';
import CategoryService from '../../services/category.service'
import { Link } from 'react-router-dom';
import './Categories.scss';
import subcategoryService from '../../services/subcategory.service';


class Categories extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categories:[],
            subcategories:[],
        }
    }
            
        componentDidMount() {
            CategoryService
            .getAll()
            .then(res => res.json())
            .then(categories => 
                this.setState({categories})
            )
            subcategoryService.getAll()
            .then(res => res.json())
            .then(subcategories => {
                this.setState({subcategories})
            })
        }
    
     render() {
         return (
             <header>
                 <div className="categories">
                     <div>
                        {this.state.categories.map((category, i) => {
                            return <Link  to={'/category/' + category.id}
                            className="category-menu" key={i}>
                            <div>
                                <img className="category-image" src={`http://localhost:4000/categories/${category.image}`} />
                            </div>
                             <div>
                                {this.state.subcategories.map((subcategory, i ) => {
                                    return <Link to={`/category/${subcategory.categoryId}/subcategory/${subcategory.id}`} key={i}>
                                                {this.state.subcategories.name}
                                        </Link> 
                                })}
                            </div> 


                            </Link>
                            })}
                     </div>

                 </div>

             </header>
            )
     }
}
export default Categories;