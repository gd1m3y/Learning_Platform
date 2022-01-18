
import styles from './Card.module.css';
const Card = (props) => {
    
    return (
        <div className={styles.card} onClick={() => window.open(props.urls,"blank")}>
            
            <img className={styles.icon} src={props.icon} alt="" />
            <h2>{props.title}</h2>
            <p>{props.msg}</p>
        </div>
    );
}

export default Card;