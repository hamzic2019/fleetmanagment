import React from 'react'
import {Link} from 'react-router-dom'
import InvoiceFilterListTab from '../../components/InvoiceFilterListTab/InvoiceFilterListTab'
import InvoiceListItem from '../../components/InvoiceListItem/InvoiceListItem'
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
                
                <InvoiceFilterListTab />

                <div className="invoices-list-options-right">
                    <Link to="/invoices/new" className='link'>Create new invoice</Link>
                </div>

                <hr />
          
          </div>
          <div className="invoices-list-invoices">

                <div className="invoices-list-invoices-status-bar">
                    <p className='status-bar-item-list' style={{width: '35%'}}>NAME</p>
                    <p className='status-bar-item-list'>DATE</p>
                    <p className='status-bar-item-list'>AMOUNT</p>
                    <p className='status-bar-item-list'>STATUS</p>

                    <p className='status-bar-item-list-5'></p>
                </div>

                  <InvoiceListItem />
                  <InvoiceListItem />
                  <InvoiceListItem />
                  <InvoiceListItem />
                  <InvoiceListItem />
                  <InvoiceListItem />
                  <InvoiceListItem />
                       

           </div>  
        </div>
    </div>
  )
}

export default Invoices