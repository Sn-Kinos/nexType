import Head from 'next/head';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './layout.module.styl';

const Layout = ({children, title = 'NO TITLE'}) => (
    <div className={styles.container}>
        <Head>
            <title>{title}</title>
        </Head>
        <Header/>
        {children}
        <Footer/>
    </div>
);

export default Layout;
