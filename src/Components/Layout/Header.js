import React from "react";
import './Header.css';
import mealsImage from '../../Assets/meals.jpg'; 
import HeaderCardButton from "./HeaderCardButton";


const Header = (props) => {

    return (
        <React.Fragment>
            <header className="header">
                <h1>ReactMeals</h1>
                <HeaderCardButton onClick={props.onShowCart}/>
            </header>
            <div className="main-image">
                <img src={mealsImage} alt="delecious meals"/>
            </div>

        </React.Fragment>
    )
}

export default Header;