import '../styles/globals.css'
import 'antd/dist/antd.css';
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";




function MyApp({Component, pageProps}) {
    return (
        <>
            <Navbar/>
            <Component {...pageProps} />
            <footer className={styles.footer}>
                    Powered by © Arman Shaqaryan
            </footer>
        </>
    )
}

export default MyApp
