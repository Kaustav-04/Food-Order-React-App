import React,{useRef,useState} from 'react';
import Input from '../../UI/Input';
import './MealItemForm.css';

const MealItemForm = (props) =>{

    const [amountState, setAmountState] = useState(true)

    const amountInputRef = useRef();

    const submitEventHandler = (e)=>{
        e.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = Number(enteredAmount);
        if(enteredAmount.trim().length === 0 || enteredAmountNumber<1 || enteredAmountNumber>5){
            setAmountState(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    }

    return (
        <form  className="form" onSubmit={submitEventHandler}>
            <Input ref={amountInputRef} label="Amount" input={{
                id : "Amount"+props.id,
                type : "Number",
                max : "5",
                min : "1",
                step : "1",
                defaultValue : "1"
            }}/>
            <button>+ Add</button>
            {!amountState && <p>Please enter a valid amount (1-5).</p>}
        </form>
    )
}

export default MealItemForm;