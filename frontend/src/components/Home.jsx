import styles from './Home.module.css';
import Logo from './Aspire.svg';

const Home = () =>{
    return(
        <div className={styles.homeContainer} >
            <center><img className={styles.logo} src={Logo} alt="" /></center>
        </div>
    );
}

export default Home;