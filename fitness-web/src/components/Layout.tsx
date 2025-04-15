import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Navbar />
      <main className={styles.mainContent}>{children}</main>
      <Footer /> {}
    </div>
  );
};

export default Layout;