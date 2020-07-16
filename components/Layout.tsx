import Head from 'next/head'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
    title?: string
}

const Layout: React.FunctionComponent<LayoutProps> = ({children, title}) => (
    <div>
        <Head>
            <title>{title}</title>
        </Head>
        <Header/>
        {children}
        <Footer/>
    </div>
)

export default Layout
