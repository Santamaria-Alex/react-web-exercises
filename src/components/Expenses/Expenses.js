
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

    return (
        <div>
            <Card className='expenses'>
                {/*onChangeFilter is called in ExpensesFilter.js
                which is getting the target.value*/}
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

                {/*this is how to dynamically add info kind of like forEach*/}
                {props.items.map(expense =>
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}/>)}

            </Card>
        </div>

    )
}

export default Expenses;
