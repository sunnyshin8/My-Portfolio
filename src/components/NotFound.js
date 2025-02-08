import React from 'react';
import Particle from "./Particle";
import { useNavigate } from 'react-router-dom';
import { Button, Row } from 'react-bootstrap';
import { FaArrowLeft, FaHome } from 'react-icons/fa';

const NotFound = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
            <Particle />
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingTop: '20%' }}>
                <h1 className='not-found-header-text'>404 - Page Not Found</h1>
                <p className='not-found-text'>Sorry, try checking out existing pages.</p>
                <Row style={{ justifyContent: "center", position: "relative", gap: "1rem" }}>
                    <Button
                        variant="primary"
                        onClick={goBack}
                        style={{ maxWidth: "300px" }}
                    >
                        <FaArrowLeft />
                        &nbsp;Go Back
                    </Button>
                    <Button
                        variant="primary"
                        href='/Bookshelf'
                        style={{ maxWidth: "300px" }}
                    >
                        <FaHome />
                        &nbsp;Back to Home
                    </Button>
                </Row>
            </div>
        </div>
    );
};

export default NotFound;