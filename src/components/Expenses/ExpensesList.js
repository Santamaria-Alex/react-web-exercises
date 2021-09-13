import ExpenseItem from "./ExpenseItem";
import React from "react";
import './ExpensesList.css'


const ExpensesList = props => {

    //this is the default state
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expense</h2>
    }

    return <ul className="expenses-list">
        {props.items.map(expense =>
            <ExpenseItem
                // we need a key for each item to prevent bugs
                // when maping (.map) list of items, a key is necessary.
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        )}
    </ul>
}

export default ExpensesList;
