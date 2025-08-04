import styles from '../Common.module.css';
import reviewimg1 from './reviewimg1.png';
import reviewimg2 from './reviewimg2.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Review() {
    return (
       <div className = {styles.reviewcontainer} > 
         <div className = {styles.reviewitem1} >
             <div> 
               <FontAwesomeIcon icon={faStar} style={{ color: 'orange' }} />
               <FontAwesomeIcon icon={faStar} style={{ color: 'orange' }} />
               <FontAwesomeIcon icon={faStar} style={{ color: 'orange' }} />
               <FontAwesomeIcon icon={faStar} style={{ color: 'orange' }} />
               <FontAwesomeIcon icon={faStar} style={{ color: 'orange' }} />
             </div>
             <div>
               <p>
                "...This is the most comfortable house i ever lived in . Thanks for all the
                <br/> great service and friendly atmosphere. Definitely recommended for<br/> short or long stays!" <br/>
               </p>
             </div>
             <div>
                 <img src = {reviewimg1}  alt = "review img 1" className = {styles.imgedit} />
             </div>
             <div>
                 <h3>JANE ANISTON</h3>
             </div>
         </div>   
         <div className={ styles.reviewitem2}>
              <div> 
               <FontAwesomeIcon icon={faStar} style={{ color: 'orange' }} />
               <FontAwesomeIcon icon={faStar} style={{ color: 'orange' }} />
               <FontAwesomeIcon icon={faStar} style={{ color: 'orange' }} />
               <FontAwesomeIcon icon={faStar} style={{ color: 'orange' }} />
               <FontAwesomeIcon icon={faStar} style={{ color: 'orange' }} />
              
             </div>
             <div>
               <p>
                "...This is the most comfortable house i ever lived in . Thanks for all the
                <br/> great service and friendly atmosphere. Definitely recommended for<br/> short or long stays!" <br/>
               </p>
             </div>
             <div>
                 <img src = {reviewimg2}  alt = "review img 1" className = {styles.imgedit} />
             </div>
             <div>
                 <h3>JANE ANISTON</h3>
             </div>
         </div>

       </div>
    );
}

export default Review;