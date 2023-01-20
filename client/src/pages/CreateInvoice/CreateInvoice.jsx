import React from 'react'
import './CreateInvoice.css'

const CreateInvoice = () => {
  return (
    <div className='createInvoiceWrapper'>
        <div className="createInvoiceWrapper-left">
              <div className="createInvoiceWrapper-dates">
                  <p>Date</p>
                  <p>Due Date</p>
              </div>
              <div className="createInvoiceWrapper-invoice">
                  <h2 style={{color: 'gray'}}>Invoice #<span style={{color: 'black'}} contentEditable>001</span></h2>
              </div>



        </div> 
    </div>
  )
}

export default CreateInvoice


