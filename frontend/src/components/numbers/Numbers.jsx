import styles from '../Common.module.css';

function Number(){
    return (
        <div className = {styles.numbercontainer}>
            <div>
              <h1 className = {styles.h1font}> 456  </h1>
              <h4>VISITORS </h4>
            </div>
            <div>
               <h1 className = {styles.h1font} >78</h1>
               <h4>YEARS OF HISTORY</h4>
            </div>
            <div>
                 <h1 className = {styles.h1font} >220</h1>
                 <h4>SQUARE FEET AREA</h4>

            </div>
        </div>
    );
}

export default Number;