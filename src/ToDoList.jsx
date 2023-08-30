import { ToDoItem } from "./ToDoItem";

export function ToDoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {/* this is just for when theres no todo items it tells the user its empty the double amperstamp is called short circuiting its basically a quick if/then*/}
      {todos.length === 0 && "No Characters Chosen"}
      {/* map allows us to pass each item in the array individually passing each items details throughtout */}
      {todos.map((todo) => {
        return (
          // here were making it run the ToDoItem function with the mapped out data from the aray passed in 
          <ToDoItem
          // here were passing all the items from the todoarray and passes in all the props
          // this is equalt to passing todo.id todo.title and todo.completed
            {...todo}
            // here were passing the id of each item as the key we use this to match the todo with the unique id for react to know whcih element were talking about
            // you usually dont wanna use the index of the array as the key
            key={todo.id}
            // here were passing the toggletodo function from the app page that basically passes the id and 
            // that the completion status of false so we can pass that boolean value in the checked box to tell if its checked or not
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
