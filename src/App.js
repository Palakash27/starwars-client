import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Signup from "./Components/Signup";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
