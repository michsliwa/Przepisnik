import React from 'react';
import Footer from './Footer';
import Header from './Header'

const Plans = ({handleLogOut}) => {
    return(
        <div className="hero">
        <Header handleLogOut={handleLogOut}></Header>
        <main className="main">
            <h1>W realizacji</h1>
        </main>
        <Footer></Footer>
        </div>
    )
}

export default Plans;