import { Link } from "react-router-dom";
import "../model.css"


function navOtherPages(props) {
    return ( 
        <div className="topcontent centr">
        <h1 className="topcontent_name">New Arrivals</h1>
        <nav className="topcontent_nav">
            <Link to="/" className="topcontent_nav_cat">Home/</Link>
            <span  className="topcontent_nav_cat last_nav"> {props.name} </span>
        </nav>
    </div>
     );
}

export default navOtherPages;