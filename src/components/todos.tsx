import React from "react";
import { useStoreActions, useStoreState } from "../hooks";

import useForm from "react-hook-form";

export default function Todos() {
  // Pull out state from our store
  const items = useStoreState(state => state.todos.items);

  // Pull out actions from our store
  const add = useStoreActions(actions => actions.todos.add);

  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      descriptionRequired: ""
    }
  });

  // // Reset the form state every time the todo items changes
  // useEffect(() => {
  //   console.log('items change')
  //   console.log(items)
  //   setValue('descriptionRequired', "")
  // }, [items]);

  const onSubmit = (hookFormData: any, e: { target: { reset: () => void; }; }) => {
    console.log(hookFormData)
    add(hookFormData.descriptionRequired);
    e.target.reset();
  };

  return (
    <div>
      <ul>
        {items.map((todo, idx) => (
          <li key={idx}>{todo}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Description</label>
        <input
          name="descriptionRequired"
          ref={register({ required: true })}
          type="text"
        />
        {errors.descriptionRequired && <span>This field is required</span>}
        <br/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
