import React from 'react';
import CategoryService from '../services/category.service'
import Categories from './Categories/Categories';
import './Home.scss'
import Carousel from './Slider/Slider';
 class Home extends React.Component {
    
     render() {
         return (
             <header className="homepage">
                 <div className="welcome">
                    <Categories  />
                 </div>
                 
             </header>
   
         )
     }
 }

 export default Home;