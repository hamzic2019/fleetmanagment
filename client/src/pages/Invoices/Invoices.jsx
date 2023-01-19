import React from 'react'
import './Invoices.css'

const Invoices = () => {
  return (
    <div className='invovicesWrapper'>
        <div className="invoices-wrapper-upper">
          <div className='invoicesHeader'>
              <h1>Billing & Invoices</h1>
          </div>

          <div className="invoicesSubHeader">
              <h6>View all your invoices and receipts.</h6>
          </div>
        </div>

        <div className="invoices-list">
          <div className="invoices-list-options">
                <div className="invoices-list-options-left">
                    <a href="#" className='active'>All Invoices</a>
                    <a href="#">Paid</a>
                    <a href="#">Unpaid</a>
                    <a href="#">Archived</a>
                    
                </div>
                <div className="invoices-list-options-right">
                    <button>Create new invoice</button>
                </div>
                <hr />
          </div>
          <div className="invoices-list-invoices">
                        <br />
                        <h1>HELLO</h1>
                        <br />
                        <h1>HELLO</h1>
                        <br />
                        <h1>HELLO</h1>
                        <br />
                        <h1>HELLO</h1>
                        <br />
                        <h1>HELLO</h1>
                        <br />
                        <h1>HELLO</h1>
                        <br />
                        <h1>HELLO</h1>
                        <br />
                        <h1>HELLO</h1>
                        <br />
                        <h1>HELLO</h1>
                        <br />
                        <h1>HELLO</h1>
                        <br />
                        <h1>HELLO</h1>
                        <br />
                        <h1>HELLO</h1>
          </div>
        </div>
    </div>
  )
}

export default Invoices