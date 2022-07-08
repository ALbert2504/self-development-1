import TodoList from "./components/TodoList";
import InputArea from "./components/InputArea";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <h1>Old and new Todo list 🧡</h1>
        <InputArea />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
