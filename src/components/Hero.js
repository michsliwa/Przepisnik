import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';


const Hero = ({handleLogOut}) => {
    return(
            <div className="hero">
                <Header handleLogOut={handleLogOut}></Header>
                <main className="main">
                    <section className="main-heading">
                        <h1>Witaj w <span className="logo">Przepiśniku</span></h1>
                        <p>Nie wiesz co zjeść na obiad? Pomożemy Ci :)</p>
                        <p>Dodawaj swoje ulubione przepisy, a już nigdy nie zmarnujesz czasu na zastanawianie się, jakie danie przygotować.</p>
                        <Link to="/przepisy">
                            <button className="main-heading-btn">Dodaj przepis</button>
                        </Link>
                    </section>
                </main>
                <Footer></Footer>
            </div>
    )
}

export default Hero;