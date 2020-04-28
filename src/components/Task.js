import React, { useContext } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPen } from '@fortawesome/free-solid-svg-icons'
import { TaskListContext } from '../context/TaskListContext'

const Task = ({ task }) => {
	const { removeTask, findItem, handleChecked } = useContext(TaskListContext)
	
// <input type="checkbox" checked={task.completed} onChange={()=> handleChecked(task.id)}/>	
	return (
		<li className="list-item">
			<button className={task.completed ? "checked-button" : "unchecked-button"} onClick={() => handleChecked(task.id)}></button>
			<span className="task-title">{task.title}</span>
			<div className="list-item-buttons">
					<button className="btn-delete task-btn" onClick={() => removeTask(task.id)}>
					<FontAwesomeIcon icon={faTrashAlt}/>
				</button>
					<button className="btn-edit task-btn" onClick={() => findItem(task.id)}>
					<FontAwesomeIcon icon={faPen}/>
				</button>
			</div>
		</li>
	)
}

export default Task
