import Footer from '../Footer';
import Header from '../header';
import { ReactNode } from 'react';
import styles from './Layout.module.css'
import Head from 'next/head'

interface LayoutProps {
    children: ReactNode;
    pageTitle: string;
}

export default function Layout(props: LayoutProps){
    const { children, pageTitle } = props;
    return (
        <>
            <Head>
                <title>
                    NextJS | 
                    {' '}
                    {pageTitle}
                </title>
                <meta name="description" content="Website NextJS" />
            </Head>
            <div className={styles.container}>
                <Header />
                <div className={styles.content}>{children}</div>
                <Footer />
            </div>
        </>
    )
}