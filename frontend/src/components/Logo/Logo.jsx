//import react from 'react';
import styles from './Logo.module.css'; 
import Logoimg from './Logoimg.png';

function Logo()  {
    return (
        <div className  = {styles.logo }>
             <img src = {Logoimg}  alt = "logo img is not rendered properly" width ="300px" height = "100px" />
        </div>
    );
}

export default Logo;