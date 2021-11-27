import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <div class="container">
      <AddTask/>
     <TaskList/>
     </div>
     </div>
    
  );
}

export default App
