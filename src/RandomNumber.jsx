import { useState } from "react";
import StatCard from "./StatCard";

function RandomNumber() {
    const [number, setNumber] = useState(null);

    function generateNumber() {
        setNumber(Math.floor(Math.random() * 100) + 1);
    }

    return (
        <section className="feature-card">
            <div className="card-heading">
                <span>02</span>
                <h2>Random Generator</h2>
                <p>Discover a new number every time.</p>
            </div>

            <StatCard title="Generated Number" value={number ?? "--"} icon="✳" />

            {number === null && <p className="empty-message">No number generated yet</p>}

            <button onClick={generateNumber} className="primary-btn generate-btn">
                ✦ Generate Random Number
            </button>
        </section>
    );
}

export default RandomNumber;