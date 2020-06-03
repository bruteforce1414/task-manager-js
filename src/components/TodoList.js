import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import MobileTearSheet from '../MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import {CSSTransition} from 'react-transition-group';
import Checkbox from 'material-ui/Checkbox';



import DeleteIcon from 'material-ui/svg-icons/action/delete';
import { MuiThemeProvider } from 'material-ui/styles';

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}

    <div className="column-list">
			<MobileTearSheet style={{pading: 10}}>
				<List>
					<CSSTransition>
				{/* 		transitionName="task-animation"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={300}>
					 	{todos.items.map(item => (
							<ListItem
								key={todos.items.id+todos.items.title}
							//	onClick={() => (props.removeMode ? props.removeTask(item) : props.updateTask(item))}
								//rightIcon={props.removeMode ? <DeleteIcon /> :
							//		<DeleteIcon style={{visibility: 'hidden'}} />}
							>
								<Checkbox
									label={item.title+"          "+item.date}
								//	disabled={props.removeMode}
									checked={item.status === 'Done'}
									className={(item.status === 'Done') ? 'task-done': ''}
								/>
							</ListItem>
            )
            )}  */}
					</CSSTransition>
				</List>
			</MobileTearSheet>
		</div>
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList