
import ExpenseDate from "./ExpenseDate"
import './ExpenseItem.css'
import {React} from 'react'

function ExpenseItem(props) {

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.releaseDate} />
            <img src={props.cover} alt={props.title}></img>
            <div className='expense-item__title'>{props.title} </div>
        </div>
    )

}
export default ExpenseItem