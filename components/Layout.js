import Header from "./Header";
import Footer from "./Footer";
import styles from '../styles/Layout.module.css'
import Meta from "./Meta";

export default function Layout({ children, title = '', desc = '' }) {

  return (
    <>
      <Meta title={title} desc={desc} />
      <main id={styles.common}>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
}