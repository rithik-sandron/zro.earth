'use client';

import Header from "./Header";
import styles from '../styles/Layout.module.css'
import Meta from "./Meta";

export default function Layout({ children,
  title = '',
  desc = '',
}) {

  return (
    <>
      <Meta title={title} desc={desc} />
      <main id={styles.common}>
        <Header />
        {children}
      </main>
    </>

  );
}