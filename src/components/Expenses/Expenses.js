
import React, {useState} from "react";

import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './ExpensesFilter';
import ExpensesFilter from "./ExpensesFilter";

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

                {/*this is how to dynamically add info kind of like forEach*/}
                {filteredExpenses.map(expense =>
                    <ExpenseItem
                        // we need a key for each item to prevent bugs
                        // when maping (.map) list of items, a key is necessary.
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}/>)}

            </Card>
        </div>

    )
}

export default Expenses;
