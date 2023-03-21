import Header from "./Header";
import Footer from "./Footer";
import styles from '../styles/Layout.module.css'

export default function Layout({ children, title = '', desc = '' }) {

  return (
    <>
      <Header title={title} desc={desc} />
      <main id={styles.common}>

        {children}
        <Footer />
      </main>
    </>
  );
}