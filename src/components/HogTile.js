import React, { useState } from "react";
import { Card, Button } from "semantic-ui-react";

function HogTile({ hog, onHideHog }) {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <Card>
            <img src={hog.image} alt={hog.name} />
            <Card.Content>
                <Card.Header>{hog.name}</Card.Header>
                {showDetails && (
                    <Card.Description>
                        <p>Specialty: {hog.specialty}</p>
                        <p>Weight: {hog.weight} kg</p>
                        <p>Greased: {hog.greased ? "Yes" : "No"}</p>
                        <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
                    </Card.Description>
                )}
            </Card.Content>
            <Card.Content extra>
                <Button onClick={toggleDetails}>
                    {showDetails ? "Hide Details" : "Show Details"}
                </Button>
                <Button negative onClick={() => onHideHog(hog.name)}>
                    Hide Hog
                </Button>
            </Card.Content>
        </Card>
    );
}

export default HogTile;
