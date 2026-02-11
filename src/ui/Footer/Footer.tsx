/**
 * 🦶 Footer UI Component
 *
 * Rodapé global da aplicação.
 * Contém links legais e copyright.
 * Estilizado via CSS Modules (`Footer.module.css`).
 */

import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={`${styles.footer} mt-8`}>
      <nav className={styles.footerNav}>
        <a href='#'>HOME</a>
        <span className={styles.dot}>•</span>
        <a href='#'>SUPPORT</a>
      </nav>

      <div className={styles.footerLegal}>
        <p>© 2025 Grandis Server. All rights reserved.</p>
        <br></br>
        <p>
          Lineage II is a trademark of NCSOFT Corporation. This is a fan project
          and is not affiliated with NCSOFT.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
