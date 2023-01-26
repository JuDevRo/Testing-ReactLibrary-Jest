import React from 'react'
import Footer from '../Footer/Footer'

import '../Layout/Layout.css'

const Layout = ({children}) => {
    return(
        <div className='layout-container'>
            {children}
            <Footer />
        </div>
    )
}

export default Layout