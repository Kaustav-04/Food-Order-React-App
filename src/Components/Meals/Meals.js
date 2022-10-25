import MealsSummary from "./MealsSummary";
import React from "react";
import AvailableMeals from "./AvailableMeals";

const Meals = () =>{
    return (
        <React.Fragment>
            <MealsSummary/>
            <AvailableMeals/>
        </React.Fragment>
    )
}

export default Meals