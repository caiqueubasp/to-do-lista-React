import React from 'react';
import Todo from './componentes/Todo/todo';
import './estilos/global.css';
import Menu from './componentes/Menu/menu';

class App extends React.Component {
   render() {
     return (
       <div>
         <Menu />
        <Todo />
       </div>
     );
   }
}

export default App;