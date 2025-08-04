import styles from '../Common.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

function Choose() {
    return (
       <div className = {styles.choosemain}>
        <h4> SECTION LINE </h4>
        <h1> Why Choose Us  </h1> 
        <div className = {styles.choosecontainer} >
            <div>
                <FontAwesomeIcon icon = {faStar}  style = {{color : 'orange'}}/>
                <h2>5 Star Chef</h2>
                <p> Intelligentsia hell of sriracha, bio food bushwick <br/>
                paleo man bun thundercats , viral fanny pack.</p>
            </div>
           <div>
                <FontAwesomeIcon icon={faClock} />
                 <h2>24-hour service</h2>
                <p> Vegan post-ironic twee truffaut taiyaki.Single-<br/>
                origin coffee whatever pop-up you probably. </p>
           </div>
           <div>
                
                <h2>
                    Children-friendly
                </h2>
                <p> Godard tacos hoodie jean shorts,pour-over <br/>
                affogato crucifix cray green juice sriracha brunch </p>
           </div> 
        </div>
     </div>
    );
}

export default Choose;