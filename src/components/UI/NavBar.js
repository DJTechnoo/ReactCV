import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap'

const NavBar = () => {
    return (
        <>
        <style type="text/css">
            {`
            .nav {
                padding: 1rem 1.5rem;
                font-size: 1.5rem;
                background-color: black;
                color: white;
            }
            .nav-link:hover {
                background-color: white;
                color: black;
                transform: scale(1.1, 1.1);
            }

            .nav-link {
                color: white;
                transition: transform 0.3s;
            }

            h2 {
                margin-left: auto;
            }

            `}
        </style>

        <Nav variant="pills">
            <Nav.Item>
                <LinkContainer to="skills">
                    <Nav.Link eventKey="link-1">Skills</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="experiences">
                    <Nav.Link eventKey="link-2">Experiences</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="art">
                    <Nav.Link eventKey="link-3">My Art</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="github">
                    <Nav.Link eventKey="link-4">Github</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <h2>Askel Eirik Johansson</h2>
        </Nav>
        </>
    )
}

export default NavBar;