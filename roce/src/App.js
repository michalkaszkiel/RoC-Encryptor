import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import Cyphers from "./Cyphers";
import Footer from "./Footer";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/Cypher" element={<Cyphers />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
