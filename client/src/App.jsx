import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation/Navigation'

// Importing pages
import Invoices from './pages/Invoices/Invoices';
import CreateInvoice from './pages/CreateInvoice/CreateInvoice';

const App = () => {
  return (
    <div className='appWrapper'>
        <Navigation />

        <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/dashboard" element={<h1>Dashbaord</h1>} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/invoices/new" element={<CreateInvoice />} />
            <Route path="/Fleet" element={<h1>Fleet</h1>} />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
        </Routes>
    </div>
  )
}

export default App