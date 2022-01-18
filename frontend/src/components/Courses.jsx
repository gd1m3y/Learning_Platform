import styles from './Courses.module.css';
import Card from './Card';
import PyLogo from './python.svg';
import Java from './java.svg';
import ML from './ml.png';
import JS from './js.svg';
import ReactLogo from './react-js.svg';
import AngLogo from './angular.svg';
import { useNavigate } from 'react-router-dom';

const Courses = (props) => {
    const navigate = useNavigate();
    const LogoutHandler =(e) => {
        e.preventDefault();
        props.onLogout();
        navigate('/login');
    }
    return (
        <div className={styles.courses}>
            <div className={styles.courseBanner}>
                
                    <h1>All Courses</h1>
                    <button onClick={LogoutHandler}>Logout</button>
                
                
            </div>

            <div className={styles.cardContainer}>
                <Card urls="https://youtu.be/rfscVS0vtbw" title="Python Fundamentals" msg="Learn Python like a pro. From the basics all the way to creating your own apps and games." icon={PyLogo}/>
                <Card urls="https://youtu.be/NWONeJKn6kc" title="Machine Learning" msg="Learn to create Machine Learning Algorithms from experts and become a pro in no time." icon={ML}/>
                <Card urls="https://youtu.be/grEKMHGYyns" title="Java Fundamentals" msg="Utilize our Java tutorial to learn the basics of the popular language, including Java objects." icon={Java}/>
                <Card urls="https://youtu.be/jS4aFq5-91M" title="Javascript Basics" msg="Learn JavaScript with this complete course on the market. From beginner to advanced." icon={JS}/>
                <Card urls="https://youtu.be/4UZrsTqkcW4" title="React for Beginners" msg="Learn the fundamentals to building any React app, and mastering it will give you a deep understanding." icon={ReactLogo}/>
                <Card urls="https://youtu.be/2OHbjep_WjQ" title="Angular for Beginners" msg="Learn to build applications with Angular and reuse your code, abilities to build apps for any deployment." icon={AngLogo}/>
            </div>

        </div>
    );
}

export default Courses;