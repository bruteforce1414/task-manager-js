import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  let input;

  

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))

          fetch("http://localhost:8080/v1/tasks", {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              title: input.value,
              description: "",
              date: new Date(),
              shared: true,
              status: "To Do",
            }),

          })	.then(async function(data) {
          let commit = await data.json();
            const addedTask = {
              id: commit.id,
              title: commit.title,
              date: commit.date,
              status: commit.status,
            };
          /*   items.push(addedTask)
            console.log("COMMIT", commit)
            self.setState({items:items}) */
          })
            .catch(err=>console.log("error", err));


            input.value = ''


        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)