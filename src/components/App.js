import React, { useState } from "react";
import HogList from "./HogList";
import Nav from "./Nav";
import AddHogForm from "./AddHogForm";
import hogsData from "../porkers_data.js";

function App() {
    const [hogs, setHogs] = useState(hogsData);
    const [filterGreased, setFilterGreased] = useState(false);
    const [sortCriteria, setSortCriteria] = useState("name");
    const [hiddenHogs, setHiddenHogs] = useState([]);

    const handleHideHog = (name) => {
        setHiddenHogs((prev) => [...prev, name]);
    };

    const handleAddHog = (newHog) => {
        setHogs((prev) => [...prev, newHog]);
    };

    const filteredHogs = filterGreased
        ? hogs.filter((hog) => hog.greased)
        : hogs;

    const sortedHogs = [...filteredHogs].sort((a, b) => {
        if (sortCriteria === "name") {
            return a.name.localeCompare(b.name);
        }
        return a.weight - b.weight;
    });

    return (
        <div className="App">
            <Nav
                setFilterGreased={setFilterGreased}
                setSortCriteria={setSortCriteria}
            />
            <AddHogForm onAddHog={handleAddHog} />
            <div className="ui grid container">
                <HogList hogs={sortedHogs} hiddenHogs={hiddenHogs} onHideHog={handleHideHog} />
            </div>
        </div>
    );
}

export default App;
