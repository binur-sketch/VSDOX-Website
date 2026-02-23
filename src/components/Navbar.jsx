import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navbar">
            <Link to="/" className="nav-logo" onClick={closeMenu}>
                <img src={logo} alt="VsDox" style={{ height: '40px' }} />
            </Link>

            {/* Desktop Nav Links */}
            <div className="nav-links">
                <Link to="/products" className="nav-link">
                    Products <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                </Link>
                <Link to="/solutions" className="nav-link">
                    Solutions <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                </Link>
                <Link to="/industries" className="nav-link">
                    Industries <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                </Link>
                <Link to="/resources" className="nav-link">
                    Resources <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                </Link>
            </div>

            <button className="btn-signin desktop-only">Request Demo</button>

            {/* Hamburger Button */}
            <button
                className="hamburger-btn"
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
            >
                <span className={`hamburger-bar ${menuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-bar ${menuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-bar ${menuOpen ? 'open' : ''}`}></span>
            </button>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="mobile-menu">
                    <Link to="/products" className="mobile-menu-link" onClick={closeMenu}>Products</Link>
                    <Link to="/solutions" className="mobile-menu-link" onClick={closeMenu}>Solutions</Link>
                    <Link to="/industries" className="mobile-menu-link" onClick={closeMenu}>Industries</Link>
                    <Link to="/resources" className="mobile-menu-link" onClick={closeMenu}>Resources</Link>
                    <button className="btn-signin mobile-demo-btn">Request Demo</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
