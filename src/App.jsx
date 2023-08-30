import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import "./styles.css";
import { ToDoList } from "./ToDoList";

export default function App() {
  // 1. here we set our new state items of todos and settodos
  // they will work identically to the item and setnewitems on the newtodoform this is the only file bringing that into play
  // so essentially we started there then came here then went to todo items then todo list just a good mental reference
  const [todos, setTodos] = useState(() => {
    // here were pulling the local storage value from item that is beng defined in our newwtodoform
    const localValue = localStorage.getItem("ITEMS");
    // were saying if its empty pass an empty array
    if (localValue == null) return [];

    // otherwise return the localvalue in json
    return JSON.parse(localValue);
  });

  // this is a new hook it takes a function as its argument and basically 
  // runs this code everytime our todo changes
// this is basically passing our info to local storage so it persists
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  // creating an array for the settodos or new items
  function addTodo(title) {
    //  3. you have to pass that set state in a function that sets todos so that
    //  when you pass a second item it doesnt overide old settodo
    // we our making cuttent todos our dynamic new state object and giving it a unique id variable a title and a boolean completed
    setTodos((currentTodos) => {
      return [
        // 2. this function adds the title and a randopm id to the new todo item it basically defines our list variables
        // its making an array of info for each item/todo that we pass in the form witht he add button
        // we use the ...currenttodos vs currenttodos so that it passes a new item in the array not just adds to the same array
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }
  // this function is intaking the id of an item and its completed value(which will be false for any created item) evreytime we click the checkbox
  // its using map to do that for all items and passing the items info if the id of the checked item matches and id from the array only that
  // cheked items info is passed on from the array
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          // always have to use ...with whatever variable cus you cant change your todo cus its state you have to use ... cus it makes a new todo
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  // this is filtering out the todo item we use this when we clickt the delete button
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      // this basically is saying if the id is not equal then keep it but if it is equal filter it out
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  // this return is responsible for the structure of our page we have the new item section then we have the title of the list below it then the todo list
  return (
    <>
    {/* here were passing the Newtodoform component and running it with the add todo function inside which is passing todo as the state and all of our , the h1 and the todolist component along with all the functions inside */}
    {/* i dont know why we pass onsubmit as addtodo tho */}
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Top Characters</h1>
      <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
