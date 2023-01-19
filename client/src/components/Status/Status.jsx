import React from 'react'
import './Status.css'

const Status = ({isPaid}) => {
  
  return (
    <div className={isPaid ? 'paid' : 'unpaid'}>
        {isPaid ? 'PAID' : 'UNPAID'}
    </div>
  )
}

export default Status