import { useState } from "react";
import StatCard from "./StatCard";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <section className="feature-card">
            <div className="card-heading">
                <span>01</span>
                <h2>Counter</h2>
                <p>Manage your numbers with ease.</p>
            </div>

            <StatCard title="Current Count" value={count} icon="↗" />

            {count === 0 && <p className="warning">Minimum limit reached</p>}

            <div className="button-group">
                <button onClick={() => setCount(count + 1)} className="primary-btn">+ Increment</button>
                <button onClick={() => setCount(Math.max(0, count - 1))} className="secondary-btn">− Decrement</button>
                <button onClick={() => setCount(0)} className="reset-btn">Reset</button>
            </div>
        </section>
    );
}

export default Counter;