import { Link } from "@chakra-ui/react";
import styles from "./Navbar.module.css";

export default function NavBar() {
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.list}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Cadastro">Cadastro</Link>
          </li>
          <li>
            <Link href="/ListaCadastro">Lista de cadastro</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
