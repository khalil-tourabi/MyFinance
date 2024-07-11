import React, { Component } from 'react';
import NavbarUnlogged from '../navbars/Navbar-unlogged';
import Hero from './Hero';
import Stats from './Stats';
import UseCases from './UseCases';
import RicherLife from './RicherLife';
import WalletHelps from './WalletHelps';
import Footer from './Footer';
import Testemonials from './Testemonial';

const Accueil = () => {
    return ( 
        <>
            <NavbarUnlogged />
            <Hero />
            <Stats />
            <UseCases />
            <RicherLife />
            <WalletHelps />
            <Testemonials />
            <Footer />
        </>
     );
}
 
export default Accueil;