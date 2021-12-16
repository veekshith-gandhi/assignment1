import { Link } from "react-router-dom";
import styles from "../Styles/Navbar.module.css";

const Navbars = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/aboutUs">About Us</Link>
      <Link to="/services">Services</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};
export default Navbars;
