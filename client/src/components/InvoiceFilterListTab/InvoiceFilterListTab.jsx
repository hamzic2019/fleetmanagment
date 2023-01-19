import React, {useState} from 'react'
import './InvoiceFilterListTab.css'

const InvoiceFilterListTab = () => {
    const [active, setActive] = useState('All Invoices')

    const handelActive = (name) => setActive(name);

  return (
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
  )
}

export default InvoiceFilterListTab