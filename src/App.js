
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/Blog";
import Header from "./components/Header";

function App() {
    return (
        <div className="App min-h-screen">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/blog" element={<BlogPage />} />
            </Routes>
        </div>
    );
}

export default App;
