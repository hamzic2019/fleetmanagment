import React from 'react'
import Status from '../Status/Status'
import './InvoiceListItem.css'

const InvoiceListItem = () => {
  
  return (
        <div className='invoiceListItemWrapper'>
            <p className='invoiceListItemWrapperItem' style={{width: '35%'}}>Zepter Internation AG</p>
            <p className='invoiceListItemWrapperItem'>20.01.2023</p>
            <p className='invoiceListItemWrapperItem'>25.222,53 $</p>
            <div className='invoiceListItemWrapperItem' style={{width: '10%'}}>
                <Status isPaid={true} />
            </div>

            <div className='invoiceListItemWrapper-div'>
                    <button className='invoiceListItemWrapper-div-btn-edit'>EDIT</button>
                    <button className='invoiceListItemWrapper-div-btn-rmv'>REMOVE</button>
            </div>
        </div>
  )
}

export default InvoiceListItem