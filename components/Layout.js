import Header from "./Header";
import Footer from "./Footer";
import styles from '../styles/Layout.module.css'
import Meta from "./Meta";

export default function Layout({ children,
  title = '',
  desc = '',
  search,
  setSearch,
  hideSearch = false
}) {

  return (
    <>
      <Meta title={title} desc={desc} />
      <main id={styles.common}>
        <Header search={search} setSearch={setSearch} hideSearch={hideSearch} />
        {children}
      </main>
      <Footer />
    </>
  );
}