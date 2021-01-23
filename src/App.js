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
        id: 1,
        text: 'Grocery shopping',
        day: "Feb 15th",
        remainder: true,
      },
    ]
  );

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}



export default App;
