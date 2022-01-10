import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
// import React from "react";

// class App extends React.Component {
//   render() {
//     return <h1>hello from class</h1>;
//   }
// }

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "doctor's appointment",
      day: "10 of jan 2022",
      reminder: true,
    },
    {
      id: 2,
      text: "project completion",
      day: "11 of jan 2022",
      reminder: true,
    },
    {
      id: 3,
      text: "shopping",
      day: "12 of jan 2022",
      reminder: false,
    },
  ]);
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
