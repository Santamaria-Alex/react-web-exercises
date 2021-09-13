
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import React, {useState} from "react";

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    //the parameter (enteredExpenseData) comes from ExpenseForm.js (expenseData)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        //set to false to go back to default state
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    //this is the functionality for the cancel button, which is in ExpenseForm.js
    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && (
                <button onClick={startEditingHandler}>Add New Expense</button>)}

            {isEditing && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    //onCancel is a prop that is being called in the ExpenseForm.js
                    onCancel={stopEditingHandler}
                />)}
        </div>
    )
}

export default NewExpense;