import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../logo.png';

const solutionsDropdown = [
    { to: '/solutions', label: 'All Solutions', icon: 'fa-layer-group', desc: 'Overview of all ECM solutions' },
    { to: '/solutions/banking-bfsi', label: 'Banking & BFSI', icon: 'fa-building-columns', desc: 'Loan, KYC & compliance docs' },
    { to: '/solutions/healthcare', label: 'Healthcare', icon: 'fa-hospital-user', desc: 'Patient records & clinical docs' },
    { to: '/solutions/manufacturing', label: 'Manufacturing', icon: 'fa-gears', desc: 'Engineering & QMS document control' },
    { to: '/solutions/education', label: 'Education', icon: 'fa-graduation-cap', desc: 'Academic repos & student records' },
    { to: '/solutions/government', label: 'Government', icon: 'fa-landmark', desc: 'Ministry & public records' },
    { to: '/solutions/judiciary', label: 'Judiciary', icon: 'fa-scale-balanced', desc: 'Court case files & legal docs' },
];

/* Pure CSS hover dropdown — no gap, no state flicker */
const DropdownMenu = ({ items }) => (
    <div className="nav-dropdown">
        <div className="nav-dropdown-inner">
            {items.map((item, i) => (
                <Link key={i} to={item.to} className="dropdown-item">
                    <span className="dropdown-icon">
                        <i className={`fas ${item.icon}`}></i>
                    </span>
                    <div>
                        <div className="dropdown-label">{item.label}</div>
                        <div className="dropdown-desc">{item.desc}</div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
);

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navRef = useRef(null);

    const closeMenu = () => setMenuOpen(false);

    // Close mobile menu on route change
    useEffect(() => { closeMenu(); }, [location.pathname]);

    return (
        <nav className="navbar" ref={navRef}>
            <Link to="/" className="nav-logo" onClick={closeMenu}>
                <img src={logo} alt="VsDox" style={{ height: '40px' }} />
            </Link>

            {/* Desktop Nav Links */}
            <div className="nav-links">

                {/* Solutions Dropdown — CSS :hover driven */}
                <div className="nav-dropdown-wrapper">
                    <button className="nav-link nav-link-btn">
                        Solutions
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </button>
                    <DropdownMenu items={solutionsDropdown} />
                </div>

                <Link to="/case-studies" className="nav-link">Case Studies</Link>
                <Link to="/about" className="nav-link">About Us</Link>
                <Link to="/blog" className="nav-link">Blog</Link>
                <Link to="/contact" className="nav-link">Contact Us</Link>
            </div>

            <Link to="/contact" className="btn-signin desktop-only">Request Demo</Link>

            {/* Hamburger Button */}
            <button
                className="hamburger-btn"
                onClick={() => setMenuOpen(prev => !prev)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
            >
                <span className={`hamburger-bar ${menuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-bar ${menuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-bar ${menuOpen ? 'open' : ''}`}></span>
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="mobile-menu">
                    <div className="mobile-section-label">Solutions</div>
                    {solutionsDropdown.map((item, i) => (
                        <Link key={i} to={item.to} className="mobile-menu-link mobile-sub-link" onClick={closeMenu}>
                            <i className={`fas ${item.icon}`} style={{ marginRight: '10px', color: 'var(--primary)' }}></i>
                            {item.label}
                        </Link>
                    ))}

                    <Link to="/case-studies" className="mobile-menu-link" onClick={closeMenu}>Case Studies</Link>
                    <Link to="/about" className="mobile-menu-link" onClick={closeMenu}>About Us</Link>
                    <Link to="/blog" className="mobile-menu-link" onClick={closeMenu}>Blog</Link>
                    <Link to="/contact" className="mobile-menu-link" onClick={closeMenu}>Contact Us</Link>

                    <Link to="/contact" className="btn-signin mobile-demo-btn" onClick={closeMenu}>Request Demo</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
