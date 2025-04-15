import styles from './SubMenu.module.css'
import Link from "next/link";
export default function SubMenu({showSubMenu}) {
  return (
    <>
      {showSubMenu && (
        <div className={styles.subMenu}>
          <div className={styles.container}>
            <ul>
              <li>
                <Link href="/products/laptops/asus">asus</Link>
              </li>
              <li>
                <Link href="/products/laptops/lenovo">lenovo</Link>
              </li>
              <li>
                <Link href="/products/laptops/apple">apple</Link>
              </li>
              <li>
                <Link href="/products/laptops/dell">dell</Link>
              </li>
              <li>
                <Link href="/products/laptops/msi">msi</Link>
              </li>
              <li>
                <Link href="/products/laptops/hp">hp</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
