import './ExpenseDate.css'

function ExpenseDate(props) {
    if (props.date) {
        var date = new Date(props.date * 1000);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
    }

    return (
        <div className='expense-date'>
            <div className='expense-date__full'> {"Release Date: " + day + "/" + month + "/" + year} </div>
        </div>
    )

}
export default ExpenseDate