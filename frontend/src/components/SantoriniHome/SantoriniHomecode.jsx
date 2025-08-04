import styles from '../Common.module.css';
import SantoriniHomeImg from './santorinihome.jpg'; 
function SantoriniHome() {
    return (
        <div className={styles.santoriniHome}>
            <img src= {SantoriniHomeImg} alt="Santorini Home" className={styles.santoriniHomeImage} />
            <div className={styles.santoriniHomeText}>
                <h1>Your Vacation <br/> Starts Here </h1>
                <p>Kale chips knausgaard mustache blog fashion axe selfies salvia.Gluten-free <br/> post-ironic deep vtypewriter.</p>
                <button className={styles.santoriniHomeButton}>View Rooms </button>
            </div>
        </div>
    );
}


export default SantoriniHome;