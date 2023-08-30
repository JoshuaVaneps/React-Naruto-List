import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  // this state basically works as a dynamic variable we cant change new item 
  // cus its our original state but we can use setnewitem to essentially change what new items always been
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    // event.preventDefault prevents the page from refreshing
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem)
// we use this to restart the new item var to empty after each submit
    setNewItem("");
  }

  return (
    // were telling our form here on submit run the handlesubmit function above which checks the new item were setting
    // then takes it in and sets the input value back to empty for the next item we wanna pass.if its empty we return nothing 
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">Favorite Naruto Character</label>
        <input
        // this is makeing whatever we type in the input field be the new item variable
          value={newItem}
          // onhcange takes in an event and updates in real time  and is setting our new item to the current value of our input
          // thats what e.target.value means its saying e=event target the value of the input
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
