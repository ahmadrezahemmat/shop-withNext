import Link from "next/link";
import styles from "./Navbar.module.css";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { useContext } from "react";
import { AppContext } from "@/pages/_app";
export default function Navbar() {
  const { menuStatus, setMenuStatus } = useContext(AppContext);
 
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <ul>
          <li>
            <RiMenuUnfold2Fill onClick={()=> setMenuStatus("open")} />
          </li>
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/articles">مقالات</Link>
          </li>
          <li>
            <Link href="/about">درباره ما</Link>
          </li>
          <li>
            <Link href="/contact">تماس با ما</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
