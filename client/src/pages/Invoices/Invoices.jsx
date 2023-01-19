import {useState} from 'react'
import InvoiceListItem from '../../components/InvoiceListItem/InvoiceListItem'
import './Invoices.css'

const Invoices = () => {
  const [active, setActive] = useState('All Invoices')

  const handelActive = (name) => setActive(name);
  
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
                    <a 
                      onClick={() => handelActive('All Invoices')} 
                      className={active === 'All Invoices' ? 'active': ''}
                    >All Invoices</a>
                    <a 
                      onClick={() => handelActive('Paid')} 
                      className={active === 'Paid' ? 'active': ''}
                    >Paid</a>
                    <a 
                      onClick={() => handelActive('Unpaid')} 
                      className={active === 'Unpaid' ? 'active': ''}
                    >Unpaid</a>
                    <a 
                      onClick={() => handelActive('Archived')} 
                      className={active === 'Archived' ? 'active': ''}
                    >Archived</a>
                    
                </div>
                <div className="invoices-list-options-right">
                    <button>Create new invoice</button>
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