import React from 'react'
import "./Subtotal.css"
import CurrenctFormat from "react-currency-format"
import {useStateValue} from "./StateProvider"
import { getCartTotal } from './reducer';
import { useNavigate} from "react-router-dom"
function Subtotal() {
  const navigate = useNavigate();
  const [{cart},dipatch]= useStateValue();
  return (
    <div className='subtotal'>
        <CurrenctFormat
        renderText={(value) => (
            <>
            <p>
                Subtotal({cart.length} items):
                <strong>{`${value}`}</strong>
                </p>
                <small className='subtotal__gift'>
                    <input type='checkbox'/>This order contains a gift
                </small>
                </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
        />

        <button onClick={e => navigate("/payment")}>Procced to Checkout</button>
    </div>
  )
}

export default Subtotal