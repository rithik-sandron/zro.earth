import Router from '../components/Router';
import styles from './styles/Index.module.css';
import './styles/global.css';

export default function layout({ children }) {

    return (
        <main>
            <div>
                <div className={styles.main}>
                    <section className={styles.home}>
                        <Router url='/'>
                            <span id={styles.logo1}>R</span>
                            <span id={styles.logo}>Z_O</span>
                        </Router>
                        <Router url='/about'>
                            <span id={styles.ken}>About</span>
                        </Router>
                        <Router url='/tree'>
                            <span id={styles.ken}>Tree</span>
                        </Router>
                    </section>
                    {children}
                </div>
            </div>
        </main>
    );
}