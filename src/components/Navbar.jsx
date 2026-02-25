import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../logo.png';

const solutionsDropdown = [
    { to: '/solutions', label: 'All Solutions', icon: 'fa-layer-group', desc: 'Overview of all ECM solutions' },
    { to: '/solutions/banking-bfsi', label: 'Banking & BFSI', icon: 'fa-building-columns', desc: 'Loan, KYC & compliance docs' },
    { to: '/solutions/healthcare', label: 'Healthcare', icon: 'fa-hospital-user', desc: 'Patient records & clinical docs' },
    { to: '/solutions/manufacturing', label: 'Manufacturing', icon: 'fa-gears', desc: 'Engineering & QMS document control' },
    { to: '/solutions/education', label: 'Education', icon: 'fa-graduation-cap', desc: 'Academic repos & student records' },
    { to: '/solutions/government', label: 'Government', icon: 'fa-landmark', desc: 'Judiciary & ministry records' },
];

const companyDropdown = [
    { to: '/about', label: 'About Vir Softech', icon: 'fa-building', desc: 'Our story, mission & values' },
    { to: '/case-studies', label: 'Case Studies', icon: 'fa-award', desc: 'Real results from real clients' },
    { to: '/careers', label: 'Careers', icon: 'fa-users', desc: 'Join our growing team' },
    { to: '/contact', label: 'Contact Us', icon: 'fa-envelope', desc: 'Get in touch with our experts' },
];

const DropdownMenu = ({ items, isOpen }) => {
    if (!isOpen) return null;
    return (
        <div className="nav-dropdown">
            {items.map((item, i) => (
                <Link key={i} to={item.to} className="dropdown-item">
                    <span className="dropdown-icon"><i className={`fas ${item.icon}`}></i></span>
                    <div>
                        <div className="dropdown-label">{item.label}</div>
                        <div className="dropdown-desc">{item.desc}</div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();
    const navRef = useRef(null);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => { setMenuOpen(false); setActiveDropdown(null); };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close on route change
    useEffect(() => { closeMenu(); }, [location.pathname]);

    const handleDropdown = (name) => {
        setActiveDropdown(prev => (prev === name ? null : name));
    };

    return (
        <nav className="navbar" ref={navRef}>
            <Link to="/" className="nav-logo" onClick={closeMenu}>
                <img src={logo} alt="VsDox" style={{ height: '40px' }} />
            </Link>

            {/* Desktop Nav Links */}
            <div className="nav-links">
                <Link to="/products" className="nav-link">Products</Link>

                {/* Solutions Dropdown */}
                <div className="nav-dropdown-wrapper" onMouseEnter={() => setActiveDropdown('solutions')} onMouseLeave={() => setActiveDropdown(null)}>
                    <button className="nav-link nav-link-btn" onClick={() => handleDropdown('solutions')}>
                        Solutions <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transition: 'transform 0.2s', transform: activeDropdown === 'solutions' ? 'rotate(180deg)' : 'rotate(0)' }}><path d="M6 9l6 6 6-6" /></svg>
                    </button>
                    <DropdownMenu items={solutionsDropdown} isOpen={activeDropdown === 'solutions'} />
                </div>

                <Link to="/industries" className="nav-link">Industries</Link>
                <Link to="/resources" className="nav-link">Resources</Link>

                {/* Company Dropdown */}
                <div className="nav-dropdown-wrapper" onMouseEnter={() => setActiveDropdown('company')} onMouseLeave={() => setActiveDropdown(null)}>
                    <button className="nav-link nav-link-btn" onClick={() => handleDropdown('company')}>
                        Company <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transition: 'transform 0.2s', transform: activeDropdown === 'company' ? 'rotate(180deg)' : 'rotate(0)' }}><path d="M6 9l6 6 6-6" /></svg>
                    </button>
                    <DropdownMenu items={companyDropdown} isOpen={activeDropdown === 'company'} />
                </div>
            </div>

            <Link to="/contact" className="btn-signin desktop-only">Request Demo</Link>

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

                    <div className="mobile-section-label">Solutions</div>
                    {solutionsDropdown.map((item, i) => (
                        <Link key={i} to={item.to} className="mobile-menu-link mobile-sub-link" onClick={closeMenu}>
                            <i className={`fas ${item.icon}`} style={{ marginRight: '10px', color: 'var(--primary)' }}></i>{item.label}
                        </Link>
                    ))}

                    <Link to="/industries" className="mobile-menu-link" onClick={closeMenu}>Industries</Link>
                    <Link to="/resources" className="mobile-menu-link" onClick={closeMenu}>Resources</Link>

                    <div className="mobile-section-label">Company</div>
                    {companyDropdown.map((item, i) => (
                        <Link key={i} to={item.to} className="mobile-menu-link mobile-sub-link" onClick={closeMenu}>
                            <i className={`fas ${item.icon}`} style={{ marginRight: '10px', color: 'var(--primary)' }}></i>{item.label}
                        </Link>
                    ))}

                    <Link to="/contact" className="btn-signin mobile-demo-btn" onClick={closeMenu}>Request Demo</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
