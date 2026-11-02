import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar";
import Counter from "./Counter";
import RandomNumber from "./RandomNumber";
import "./style.css";

function App() {
    return (
        <div>
            <Navbar />

            <main className="container">
                <header className="hero">
                    <span className="tag">REACT MINI PROJECT</span>
                    <h1>Manage State.<br /><span>Experience React.</span></h1>
                    <p>Explore interactive components powered by React useState and event handling.</p>
                </header>

                <div className="dashboard">
                    <Counter />
                    <RandomNumber />
                </div>
            </main>

            <footer>Built with React &nbsp; • &nbsp; StateFlow © 2026</footer>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);