
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigator from "./components/Navigator";
import { BrowserRouter, Route, Link } from "react-router-dom";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />

      <Container>
        <BrowserRouter>
          <Navigator>
            <Link to="/about"> About </Link>
            <Link to="/portfolio"> Portfolio </Link>
            <a href='/resume/resumefile.txt' download>Resume</a>
            <Link to="/contact"> Contact Me </Link>
          </Navigator>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path='/portfolio'>
            <Portfolio/>
          </Route>
          <Route exact path='/contact'>
            <Contact/>
          </Route>
        </BrowserRouter>
      </Container>

      <Footer />
    </div>
  );
}

export default App;