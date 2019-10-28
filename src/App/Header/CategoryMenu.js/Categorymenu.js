import React from 'react';
import { Link } from 'react-router-dom';
import categoryService from '../../services/category.service';
import './Categorymenu.scss';
import subcategoryService from '../../services/subcategory.service'



class Categorymenu extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        categories:[],
        subcategories:[],
        isHover:false,
        }
    }
    toggleHover() {
        this.setState({isHover:!this.state.isHover})
    }
    componentDidMount() {
        categoryService
        .getAll()
        .then(res => res.json())
        .then(categories => {
            this.setState({categories})
            console.log(categories)
        })
        subcategoryService.getAll()
        .then(res => res.json())
        .then(subcategories => {
            this.setState({subcategories})
            console.log(subcategories)
        })
    }
    render() {
        return (
            <div className="nav navbar">
                <ul className="list-item">
                    {this.state.categories.map((category, i) => {
                        return <Link to={'/category/' + category.id}
                            className="nav-item dropdown" key={i}  >
                                <li className="nav-link dropdown-toggle">{category.name}
                                <div className="dropdown-menu">
                                    {this.state.subcategories.map((subcategory, categoryId ) => {
                                        if(subcategory.categoryId === category.id) {
                                            return <Link to={`/category/${subcategory.categoryId}/subcategory/` + subcategory.id} key={categoryId} className="dropdown-item">
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown-item" key={categoryId} className="dropdown-item">
                                                        {subcategory.name}
                                                    </li>
                                                </ul>
                                         
                                         </Link>
                                        }
     
                                    })}
                                </div>
                                </li>
                            </Link>

                    })}
                </ul>
            </div>

        )
    }
}




export default Categorymenu;












{/* <div className="nav navbar">
<ul className="list-item">
    {this.state.categories.map((category, i) => {
        return <Link to={'/category/' + category.id}
            className="nav-item dropdown" key={i}  >
                <li className="nav-link dropdown-toggle">{category.name}
                <div className="dropdown-menu">
                    {this.state.subcategories.map((subcategory, categoryId ) => {
                        if(subcategory.categoryId === category.id) {
                            return <Link to={`/category/${subcategory.categoryId}/subcategory/` + subcategory.id} key={categoryId} className="dropdown-item">
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item" key={categoryId} className="dropdown-item">
                                        {subcategory.name}
                                    </li>
                                </ul>
                         
                         </Link>
                        }

                    })}
                </div>
                </li>
            </Link>

    })}
</ul>
</div> */}