import React from 'react'
import Header from './header'
import { Outlet } from 'react-router-dom'
import Footer from './footer'

const Layout = ({ cart, addToCart, removeFromCart }) => {
    return (
        <div>
            <Header cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
            <main className='main'>
                <Outlet />
            </main>
            <Footer />


        </div>
    )
}

export default Layout