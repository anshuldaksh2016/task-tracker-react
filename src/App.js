import './index.css'
import { Header } from './components/Header';
import Tasks from './components/Tasks'
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Doctor Appointment ',
        day: "Feb 5th 4:30PM",
        remainder: true,
      },
      {
        id: 2,
        text: 'Meeting at college',
        day: "Feb 9th 9:00 AM",
        remainder: true,
      }, {
        id: 3,
        text: 'Grocery shopping',
        day: "Feb 15th 9:50AM ",
        remainder: true,
      },
    ]
  );

  // delet task
  const deleteTask = (id) => {
    //console.log(id + "Deleted !!");
    setTasks(tasks.filter((task) => task.id !== id));
    // show only where the task.id is not equal to the id .
  }

  return (
    <div className="container">
      <Header />
      {
        tasks.length > 0 ?
          <Tasks tasks={tasks} onDelete={deleteTask} /> :
          'No tasks Add some '
      }

    </div>
  );
}



export default App;
