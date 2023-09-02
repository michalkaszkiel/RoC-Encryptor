import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import Cypher from "./Cypher";
import Footer from "./Footer";
import Logo from "./Logo";
function App() {
    return (
        <div className="App">
            <Logo
                style={{ width: "50%", height: "100%" }}
                className="Logo-Padlock"
            />
            <Logo
                style={{ width: "50%", height: "100%" }}
                className="Logo-Txt"
            />
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/Cypher" element={<Cypher />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
