import { useNavigate } from 'react-router-dom';
import './PopUp.css';

function PopUp(props) {
    const navigate=useNavigate();
    const LoginNav = () => {
        props.setTrigger(false);
        navigate('/login');
    }
    return  (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={LoginNav}>
                   close 

                </button>
                {props.children}
            </div>

        </div>
    ) : "";
    

}

export default PopUp;