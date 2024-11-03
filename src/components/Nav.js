import React from "react";

function Nav({ setFilterGreased, setSortCriteria }) {
    return (
        <nav>
            <button onClick={() => setFilterGreased((prev) => !prev)}>
                Toggle Greased
            </button>
            <select onChange={(e) => setSortCriteria(e.target.value)}>
                <option value="name">Sort by Name</option>
                <option value="weight">Sort by Weight</option>
            </select>
        </nav>
    );
}

export default Nav;
