import styles from '../Common.module.css';

function Contactdetails() {
    return (
        <div className={styles.contactDetails}>
            <div> <p> SECTION OVERLINE </p></div>
            <div className = {styles.parafont} > <p> Contact us for details </p></div>
            <div> <button className = {styles.contactButton}> CONTACT US </button> </div>
            </div>
    );
}

export default Contactdetails;