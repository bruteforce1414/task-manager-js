import sortBy from 'sort-by';


const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
          const input = this.taskInput.input || {};
          const {value = ''} = input;
          let self=this;
      
          if (value === '') return;
      
           this.setState( previousState =>{
            const {items = []} = previousState;
            const {taskIdCounter = 0} = previousState;
            const taskId = taskIdCounter + 1;
             const newTask = {
              id: taskId,
              title: value,
              date: new Date(),
              status: 'To Do'
            };
            fetch("http://localhost:8080/v1/tasks", {
               method: 'POST',
               headers: {
                 Accept: 'application/json',
                 'Content-Type': 'application/json',
               },
               body: JSON.stringify({
                 title: value,
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
               items.push(addedTask)
              console.log("COMMIT", commit)
               self.setState({items:items})
             })
               .catch(err=>console.log("error", err));
      
      
      
            // self.setState({items:items})
             return {
               items: items.sort(sortBy('id')),
               submitDisabled: false,
               taskIdCounter: taskId,
             }
      
          }, function stateUpdateComplete() {
            this.taskInput.input.value = '';
            //this.updateLocalStorageItems(this.state.items);
            this.updateTaskCounter(this.state.taskIdCounter);
          }.bind(this));
        ;
      case 'TOGGLE_TODO':
        return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        );
      default:
        return state
    }
  }
  
  export default todos