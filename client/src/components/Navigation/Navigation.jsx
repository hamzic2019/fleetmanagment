import React from 'react'
import {Link, useLocation, useParams} from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
  // const location = useLocation();
  // const currentURL = location.pathname;

  // console.log(currentURL);

  return (
    <div className='navigation-wrapper'>
        <div className="navigation-logo">
            <Link to="/" className='navigation-logo-link'>FleetManagment</Link>
        </div>

        <div className="navigation-action-links">
            <Link className='navigation-action-link-item' to="/dashboard">Dashboard</Link>
            <Link className='navigation-action-link-item' to="/invoices">Invoices</Link>
            <Link className='navigation-action-link-item' to="/fleet">Fleet</Link>
            <Link className='navigation-action-link-item' to="/calendar">Calendar</Link>
        </div>
    </div>
  )
}

export default Navigation