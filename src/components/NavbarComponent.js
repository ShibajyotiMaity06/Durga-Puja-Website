import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavbarComponent.css';

const navLinks = [
  { path: '/main/history', label: 'History and Genesis' },
  { path: '/main/past-events', label: 'Past Events' },
  { path: '/main/upcoming-events', label: 'Upcoming Events' },
  { path: '/main/office-bearers', label: 'Office Bearers' },
  { path: '/main/members', label: 'List of Members' },
  { path: '/main/top-donors', label: 'Top 10 Donors' },
  { path: '/main/new-registration', label: 'New Registration' },
  { path: '/main/donations', label: 'Donations' }
];

const NavbarComponent = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav className="nav">
      <div className="nav-logo">
        <Link to="/" style={{ textDecoration: 'none', color: '#211c0d' }}>
          Durga Puja Association
        </Link>
      </div>
      <div className={`nav-links ${open ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <Link key={link.path} to={link.path} className="nav-link">
            {link.label}
          </Link>
        ))}
      </div>
      <div className="nav-hamburger" onClick={() => setOpen(!open)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
