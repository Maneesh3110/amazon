import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image'
            src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/HipHopIndia/GW_Hero_PC/3000x1200_Hip-Hop-India_V1._CB600362344_.jpg'
             alt=''/>

             <div className='home__row'>
                <Product
                id = "12345"
                title="Armani Exchange Mens Hampton Stainless Steel Analogue Watch with Bracelet (Black_Free Size)"
                price={29.9}
                image="https://m.media-amazon.com/images/I/71wj9B26IRL._AC_SY350_.jpg"
                rating ={5}
                />
                <Product
                id = "12334"
                    title="Apple 2023 MacBook Pro Laptop M2 Pro chip with 12‑core CPU and 19‑core GPU: 33.74 cm (14.2-inch), 16GB Unified Memory, 1TB SSD Storage. Works with iPhone/iPad; Silver"
                    price={2500}
                    image="https://m.media-amazon.com/images/I/618gNo+ohxL._AC_UY436_FMwebp_QL65_.jpg"
                    rating={5}
                />
                
             </div>
             <div className='home__row'>
             <Product
                    id = "123445"
                    title="Apple 2023 MacBook Pro Laptop M2 Pro chip with 12‑core CPU and 19‑core GPU: 33.74 cm (14.2-inch), 16GB Unified Memory, 1TB SSD Storage. Works with iPhone/iPad; Silver"
                    price={2500}
                    image="https://m.media-amazon.com/images/I/618gNo+ohxL._AC_UY436_FMwebp_QL65_.jpg"
                    rating={5}
                />
                <Product
                    id = "123245"
                    title="All-New Echo Dot (5th Gen, 2023 release) | Smart speaker with Bigger sound, Motion Detection, Temperature Sensor, Alexa and Bluetooth| Blue"
                    price={250}
                    image="https://m.media-amazon.com/images/I/71cV-ickxOL._AC_UY436_FMwebp_QL65_.jpg"
                    rating={5}
                />
                <Product
                    id = "53345"
                    title="Emporio Armani Giovanni Analog Black Dial Men's Watch-AR11349"
                    price={500}
                    image="https://m.media-amazon.com/images/I/61RnYP3i2TL._UX679_.jpg"
                    rating={5}
                />
             </div>
             <div className='home__row'>
             <Product
                    id = "123425"
                    title="Apple iPhone 14 Pro Max (128 GB) - Space Black"
                    price={1199}
                    image="https://m.media-amazon.com/images/I/610pghkO81L._SL1500_.jpg"
                    rating={5}
                />
             </div>
        </div>
    </div>
  )
}

export default Home