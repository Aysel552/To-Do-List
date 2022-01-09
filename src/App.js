
import './App.css';
import image from './Checklist.jpg';
import imageTwo from './/Checkedlist.jpg'
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <img className='imageOne' src={image} width="200px" alt="Checklist" />
        </div>
      <div className='header'>
        <h1>TODO List</h1>
        </div>
      <ToDoList />
      <div className='header'>
        <img className='imageTwo' src={imageTwo} width="200px" alt="Checkedlist" />
        </div>

      
      
    </div>
  );
}

export default App;
