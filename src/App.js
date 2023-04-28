import React, { useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";




const App = () =>{
    // const message ="TESTE OFICIAL!"
const [tasks, SetTasks]=useState([  // quando usamos state atualizamos o componente se fosse apenas um variavel não iriamos att o componente
    {
         id:"1",
         tilte: "Estudar Programação",
         completed: false,

    },
    {
      id:"2",
      tilte: "ler livros",
      completed: true,

    }


]);
return(



<>
<div className="container">

    <Tasks tasks={tasks}/>
</div>



</>

);
};
export  default App;