import React, {useContext} from 'react';
import { TaskContext } from '../TaskContext';
import TaskDetails from './TaskDetails';

const TaskList = () => {
    const {tasks} = useContext(TaskContext);
    return tasks.length ?( 
        <div className="task-list">
            <ul>
                { tasks.map( task => {
                    return( <TaskDetails task = {task} key={task.id}/>);
                })}
            </ul>
        </div>
     ) : (
         <div className="empty">No Tasks to do</div>
     )
}
 
export default TaskList;