import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Page from "./components/Page";
import Portfolio from "./components/Portfolio";
import About from "./components/About"
import Contact from "./components/Contact"

function App() {

    return (
        <div className="app">
            <Nav />
            <Header />
            <About />
            <Page />
            <Portfolio />
            <Contact />
            <Footer />
           
        </div>
    );
}

export default App;