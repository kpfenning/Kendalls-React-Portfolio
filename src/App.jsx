import React from 'react';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Page from "./components/Page";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import { useState } from 'react';


function App() {
    const [currentPage, setCurrentPage] = useState('Home');
    const changePage = (pageName) => {setCurrentPage(pageName)};
    const mySite = () => {
        switch(currentPage) {
            case 'About':
                return<About />;
            case 'Contact':
                return<Contact />;
            case 'Footer':
                return<Footer />;
            case 'Nav':
                return<Nav onPageChange={changePage}/>;
            case 'Portfolio':
                return<Portfolio />;
            case 'Resume':
                return<Resume />;
            case 'Home':
                default:
                    return <About />;
        }
    }
    return (
        <>
        <Nav onPageChange={changePage}/>
        {mySite()}
        <Footer/>
        </>
    )
}

export default App;