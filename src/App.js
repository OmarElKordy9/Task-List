import React from 'react';
import Navbar from './Components/Navbar';
import NewTaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import TaskContextProvider from './TaskContext';

function App() {
  return (
    <div className="App">
      <TaskContextProvider>
        <Navbar />
        <TaskList />
        <NewTaskForm />
      </TaskContextProvider>
    </div>
  );
}

export default App;
