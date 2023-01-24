import React, { useState } from "react";

const SubmitForm = (props) => {
    const [enteredTask, setEnteredTask] = useState('');


    const changeHandler = (event) => {
        setEnteredTask(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const taskData = {
            title: enteredTask
        };

        props.onSaveTaskData(taskData);
        setEnteredTask('');
    };

    return (
        <form onSubmit={submitHandler}>
            <input type="search" placeholder="write sth" value={enteredTask} onChange={changeHandler}/>
            <input type="submit" value="add"/>
        </form>
    );
}

export default SubmitForm;