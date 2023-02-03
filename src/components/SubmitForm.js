import React, { useState } from "react";

import './SubmitForm.css';

const SubmitForm = (props) => {
    const [enteredTask, setEnteredTask] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [isValid, setIsValid] = useState(true);

    const changeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredTask(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const taskData = {
            title: enteredTask,
            date: new Date(enteredDate)
        };

        if (enteredTask.trim().length === 0) {
            setIsValid(false);
            return;
        }
        props.onSaveTaskData(taskData);
        setEnteredTask('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <input 
                className="submit-form__datepicker" 
                type='date' 
                min='2023-01-01' 
                max='2027-12-31' 
                value={enteredDate}
                onChange={dateChangeHandler}
            />
            <input
                className="submit-form__bar"
                style={{ borderColor: !isValid ? 'red' : 'black' }}
                type="text" 
                placeholder="write sth"
                value={enteredTask}
                onChange={changeHandler}
            />
            <input
                className="submit-form__add-button"
                type="submit"
                value="Add"
            />
        </form>
    );
}

export default SubmitForm;