import React from "react";
import HogTile from "./HogTile";

function HogList({ hogs, hiddenHogs, onHideHog }) {
    return (
        <>
            {hogs.map((hog) => (
                !hiddenHogs.includes(hog.name) && (
                    <div className="ui eight wide column" key={hog.name}>
                        <HogTile hog={hog} onHideHog={onHideHog} />
                    </div>
                )
            ))}
        </>
    );
}

export default HogList;
