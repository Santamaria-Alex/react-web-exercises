
import React, {useState} from "react";

import './Expenses.css'
import Card from "../UI/Card";
import './ExpensesFilter';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    // this function returns a new array list based on whether the expense date matches the filtered date.
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })


    return (
        <div>
            <Card className='expenses'>
                {/*onChangeFilter is called in ExpensesFilter.js
                which is getting the target.value*/}
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>

    )
}

export default Expenses;
