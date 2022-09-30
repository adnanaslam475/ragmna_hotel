import { Collapse } from "@mui/material";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


// Loader with double-bounce

export function LoaderwithDoublebounce() {
    const [expanded, setExpanded] = useState(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const [show, setShow] = React.useState(true);

    return (
        <div>
            {show ? <Card>
                <Card.Header>
                    <Card.Title>loaders</Card.Title>
                    <div className="card-options">
                        <Link to="#" onClick={handleExpandClick}><i className={`fe ${expanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                        <Link to="#" onClick={() => setShow(false)} aria-label="close"><i className="fe fe-x"></i></Link>
                    </div>
                </Card.Header>
                <Collapse in={expanded} timeout="auto">
                    <Card.Body>
                        <div className="dimmer active">
                            <div className="spinner1">
                                <div className="double-bounce1"></div>
                                <div className="double-bounce2"></div>
                            </div>
                        </div>
                    </Card.Body>
                </Collapse>
            </Card> : null}
        </div>
    )
};

// Loader with cube

export function LoaderwithCube() {
    const [expanded, setExpanded] = useState(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const [show, setShow] = React.useState(true);

    return (
        <div>

            {show ? <Card>
                <Card.Header>
                    <Card.Title>loaders</Card.Title>
                    <div className="card-options">
                        <Link to="#" onClick={handleExpandClick}><i className={`fe ${expanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                        <Link to="#" onClick={() => setShow(false)} aria-label="close"><i className="fe fe-x"></i></Link>
                    </div>
                </Card.Header>
                <Collapse in={expanded} timeout="auto">
                    <Card.Body>
                        <div className="dimmer active">
                            <div className="spinner2">
                                <div className="cube1"></div>
                                <div className="cube2"></div>
                            </div>
                        </div>
                    </Card.Body>
                </Collapse>
            </Card> : null}
        </div>
    )
};

// Loader with Spinner

export function LoaderwithSpinner() {
    const [expanded, setExpanded] = useState(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const [show, setShow] = React.useState(true);

    return (
        <div>

            {show ? <Card>
                <Card.Header>
                    <Card.Title>loaders</Card.Title>
                    <div className="card-options">
                        <Link to="#" onClick={handleExpandClick}><i className={`fe ${expanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                        <Link to="#" onClick={() => setShow(false)} aria-label="close"><i className="fe fe-x"></i></Link>
                    </div>
                </Card.Header>
                <Collapse in={expanded} timeout="auto">
                    <Card.Body>
                        <div className="dimmer active">
                            <div className="spinner"></div>
                        </div>
                    </Card.Body>
                </Collapse>
            </Card> : null}
        </div>
    )
};

// Loader with lds-ring

export function LoaderwithRing() {
    const [expanded, setExpanded] = useState(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const [show, setShow] = React.useState(true);

    return (
        <div>
            {show ? <Card>
                <Card.Header>
                    <Card.Title>loaders</Card.Title>
                    <div className="card-options">
                        <Link to="#" onClick={handleExpandClick}><i className={`fe ${expanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                        <Link to="#" onClick={() => setShow(false)} aria-label="close"><i className="fe fe-x"></i></Link>
                    </div>
                </Card.Header>
                <Collapse in={expanded} timeout="auto">
                    <Card.Body>
                        <div className="dimmer active">
                            <div className="lds-ring">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </Card.Body>
                </Collapse>
            </Card> : null}
        </div>
    )
};

// Loader with lds-hourglass

export function LoaderwithHourGlass() {
    const [expanded, setExpanded] = useState(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const [show, setShow] = React.useState(true);

    return (
        <div>

            {show ? <Card>
                <Card.Header>
                    <Card.Title>loaders</Card.Title>
                    <div className="card-options">
                        <Link to="#" onClick={handleExpandClick}><i className={`fe ${expanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                        <Link to="#" onClick={() => setShow(false)} aria-label="close"><i className="fe fe-x"></i></Link>
                    </div>
                </Card.Header>
                <Collapse in={expanded} timeout="auto">
                    <Card.Body>
                        <div className="dimmer active">
                            <div className="lds-hourglass"></div>
                        </div>
                    </Card.Body>
                </Collapse>
            </Card> : null}
        </div>
    )
};

// Loader with lds-heart

export function LoaderwithHeart() {
    const [expanded, setExpanded] = useState(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const [show, setShow] = React.useState(true);

    return (
        <div>

            {show ? <Card>
                <Card.Header>
                    <Card.Title>loaders</Card.Title>
                    <div className="card-options">
                        <Link to="#" onClick={handleExpandClick}><i className={`fe ${expanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                        <Link to="#" onClick={() => setShow(false)} aria-label="close"><i className="fe fe-x"></i></Link>
                    </div>
                </Card.Header>
                <Collapse in={expanded} timeout="auto">
                    <Card.Body>
                        <div className="dimmer active">
                            <div className="lds-heart">
                                <div></div>
                            </div>
                        </div>
                    </Card.Body>
                </Collapse>
            </Card> : null}
        </div>
    )
};