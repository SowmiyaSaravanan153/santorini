//import react from 'react';
import styles from './Navbar.module.css';
import Logo from '../Logo/Logo';                                            
import Home from '../Home/Home';
import About from '../About/About';
import Rooms from '../Rooms/Rooms';
import Contact from '../Contact/Contact';
import Button from '../Button/Button';

function Navbar(){
    return ( 
     <nav className = {styles.navbar}>
        <Logo />
    <div className = {styles.navbar_links}>
        <Home />
        <About />
        <Rooms />
        <Contact />
        <Button />
    </div>
   </nav>

    ); 
}

export default Navbar;