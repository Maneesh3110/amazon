import React from 'react'
import "./Subtotal.css"
import CurrenctFormat from "react-currency-format"
import { Button } from '@mui/material'
function Subtotal() {
  return (
    <div className='subtotal'>
        <CurrenctFormat
        renderText={(value) => (
            <>
            <p>
                Subtotal(0 items):
                <strong>{`${value}`}</strong>
                </p>
                <small className='subtotal__gift'>
                    <input type='checkbox'/>This order contains a gift
                </small>
                </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        />

        <button>Procced to Checkout</button>
    </div>
  )
}

export default Subtotal