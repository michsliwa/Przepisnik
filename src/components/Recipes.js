import React from 'react';
import Footer from './Footer';
import Header from './Header'
import RecipeList from './RecipeList';

const Recipes = ({handleLogOut}) => {
    return(
        <div className="hero">
        <Header handleLogOut={handleLogOut}></Header>
        <RecipeList></RecipeList>
        <Footer></Footer>
        </div>
    )
}

export default Recipes;