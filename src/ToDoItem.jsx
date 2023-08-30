export function ToDoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      {/*you have to make sure to use the arrow because we need to creat a full function that can be called when delete is pressed 
      if you dont use the arrow it will run immediately and will delete the info as soon as it comes in not onclick */}
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}
