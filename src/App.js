import React, {Component} from 'react';
import Footer from '../src/components/Footer';
import AddTodo from '../src/containers/AddTodo';
import VisibleTodoList, {getVisibleTodos} from '../src/containers/VisibleTodoList';
import {addTodo} from '../src/actions';
import TodoList from '../src/components/TodoList';





export default class App  extends Component {
  constructor(props) {
		super(props);

		/**
		 * @typedef {Object} ComponentState
		 * @property {Object[]} items - All list items of the app.
		 * @property {number} taskIdCounter - The index of the last task added.
		 * @property {boolean} submitDisabled - Indicates whether submit is disabled.
		 * @property {number} slideIndex - The index of the tab component.
		 * @property {boolean} dialogOpen - Visibility of the clear tasks dialog.
		 * @property {boolean} removeMode - Indicates if the remove mode is active.
		 */

		/** @type {ComponentState} */
		this.state = {
			items: [],
			taskIdCounter: 0,
			submitDisabled: false,
			slideIndex: 0,
			dialogOpen: false,
			removeMode: false,
			isLoaded: false,
		};
	}



  componentDidMount() {
    console.log("this.componentDidMount")
		let self =this;
		let commits;
		let {items = []} = this.state;
		let url = "http://localhost:8080/v1/tasks?offset=1&limit=20";
		fetch(url, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},

		})
			.then(async function(data) {
				commits = await data.json();
				for (let i = 0; i < commits.length; i++) {
					console.log("commits[i]", commits[i]);
					console.log("addTodo", addTodo(commits[i]));
					items.push(commits[i]);

				
					
				}
				console.log("items", items);
				TodoList(items, "");

				//self.setState({items:items})
				console.log("Количество записей из базы данных:", commits.length)
			})
      .catch(err=>console.log("error", err));
      

	}




  render(){
    return (
      <div>
      <AddTodo />
      <VisibleTodoList />
	  
      <Footer />
    </div>
    )
   



  }
  


}

