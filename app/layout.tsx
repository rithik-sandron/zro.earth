import styles from './styles/Index.module.css';
import Router from '../components/Router';
import './styles/global.css';

export default function Main({ children }) {
    return (
        <html>
            <body>
                <main className={styles.main}>
                    <Router url='/' className='sub-container'>
                        <span id={styles.logo1}>R</span>
                        <span id={styles.logo}>Z_O</span>
                    </Router>
                    <section className={styles.home}>

                        <Router url='/about'>
                            <span id={styles.ken}>About</span>
                        </Router>
                        <Router url='/tree'>
                            <span id={styles.ken}>Tree</span>
                        </Router>
                    </section>
                    {children}
                </main>
            </body>
        </html>
    );
}