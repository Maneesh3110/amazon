
import './Payment.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
function Payment() {
    const [{cart,user},dispatch] = useStateValue();
    
    const handleSubmit = e=>{
        
    }
  return (
    
    <div className='payment'>
    <div className='payment__container'>
        <h1>
            Checkout(
                <Link to ="/checkout">{cart?.length} items</Link>
            )
        </h1>
        {/*payment section - delivery address */}
        <div className='payment__section'>
                <div className='payment__title'>
                    <h2>Delivery address</h2>
                </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>React</p>
                    <p>Pincode</p>
                </div>

        </div>
        {/*Payment section - review items*/}
        <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment__items'>
                    {cart.map(item =>(
                        <CheckoutProduct
                        id ={item.id}
                        title = {item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>
            
        </div>

        <div className='payment__section'>
            <div className='payment__title'>
            <h2>Payment method</h2>
            </div>
            <div className='payment__details'>
                <form onSubmit={handleSubmit}>
                  
                </form>
            </div>
            
        </div>

    </div>
    </div>
 
  )
}

export default Payment