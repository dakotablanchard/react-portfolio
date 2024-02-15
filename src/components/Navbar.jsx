import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from './Header';

const Navbar = () => {
    const currentPage = useLocation().pathname;
    const [pageTitle, setPageTitle] = useState('');

    useEffect(() => {
      switch (currentPage) {
        case '/':
          setPageTitle('Home');
          break;
        case '/about-me':
          setPageTitle('About Me');
          break;
        case '/portfolio':
          setPageTitle('Portfolio');
          break;
        case '/contact':
          setPageTitle('Contact');
          break;
        case '/resume':
          setPageTitle('Resume');
          break;
        default:
          setPageTitle('');
          break;
      }
    }, [currentPage]);

    return (
    <div>
    <ul className="nav-tabs">
      <li className="nav-item">
        <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/about-me" className={currentPage === '/about-me' ? 'nav-link active' : 'nav-link'}>
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/portfolio" className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}>
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/contact" className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}>
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/resume" className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}>
          Resume
        </Link>
      </li>
    </ul>
    <Header pageTitle={pageTitle} />
    </div>
    );
}

export default Navbar;