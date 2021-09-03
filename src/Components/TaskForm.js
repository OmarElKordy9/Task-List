import React, {useContext, useState} from 'react';
import { TaskContext } from '../contexts/TaskContext';

const NewTaskForm = () => {
    const {dispatch} = useContext(TaskContext);
    const[title, setTitle] = useState('');
    const[details, setDetails] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_TASK', task: { title, details}});
        setTitle('');
        setDetails('');
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Task Title" value={title}
            onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder="Details" value={details}
            onChange={(e) => setDetails(e.target.value)} required />
            <input type="submit" value="Add Task" />
        </form>
     );
}
 
export default NewTaskForm;