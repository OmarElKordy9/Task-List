import React, {useContext} from 'react';
import { TaskContext } from '../contexts/TaskContext';

const Navbar = () => {
    const {tasks} = useContext(TaskContext);
    return ( 
        <div className="navbar">
            <h1>Kordy's Tasks List</h1>
            <p>Currently you have {tasks.length} tasks to do...</p>
        </div>
     );
}
 
export default Navbar;