import React from 'react';
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from 'react-bootstrap'
import {LinkContainer} from "react-router-bootstrap";

export default class Navigation extends React.Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/home"><div className={"FineFarger"}>ACT System</div></a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/home"><NavItem eventKey={1} href="/home">Home</NavItem></LinkContainer>
                        <NavDropdown eventKey={2} title="Konsulent" id="basic-nav-dropdown">
                            <LinkContainer to="/cv"><MenuItem eventKey={2.1} href='/cv'>CV</MenuItem></LinkContainer>
                            <LinkContainer to="/design"><MenuItem eventKey={2.1} href='/cv'>CV versjon 2</MenuItem></LinkContainer>
                            <MenuItem divider/>
                            <MenuItem eventKey={2.2}>Research</MenuItem>
                            <MenuItem eventKey={2.3}>Rekruttering</MenuItem>
                            <MenuItem eventKey={2.3}>Onboarding</MenuItem>
                            <MenuItem eventKey={2.3}>Oppfølging</MenuItem>
                            <MenuItem eventKey={2.3}>Kompetansekartlegging</MenuItem>
                            <MenuItem eventKey={2.3}>Talentutviking</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={3} title="Oppdrag" id="basic-nav-dropdown">
                            <LinkContainer to="/foresporsler"><MenuItem eventKey={3.1} href='/foresporsler'>Forespørsler</MenuItem></LinkContainer>
                            <MenuItem eventKey={3.2}>Finn kandidater</MenuItem>
                            <MenuItem eventKey={3.2}>Besvare tilbud</MenuItem>
                            <MenuItem divider/>
                            <MenuItem eventKey={3.3}>Kontrakt</MenuItem>
                            <MenuItem eventKey={3.3}>Kalkyle</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={4} title="Salg" id="basic-nav-dropdown">
                            <MenuItem eventKey={4.1}>Søk mot linkedIn</MenuItem>
                            <MenuItem eventKey={4.2}>Søk mot Google</MenuItem>
                        </NavDropdown>
                        <LinkContainer to="/about"><NavItem eventKey={5} href="/about">about</NavItem></LinkContainer>
                    </Nav>
                    <Nav pullRight>
                        <LinkContainer to="/login"><NavItem eventKey={6} href="/login">Login</NavItem></LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
