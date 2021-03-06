import React,{ useContext, useState, useEffect } from 'react'
import { TaskListContext } from '../context/TaskListContext'

const TaskForm = () => {
	const { clearList, addTask, editItem, editTask } = useContext(TaskListContext)
	const [title, setTitle] = useState('')
	
	const handleSubmit = e => {
		e.preventDefault()
		if (!editItem){
			addTask(title)
			setTitle('')
		} else {
			editTask(title, editItem.id)
		}
	}
	
	const handleChange = e => {
		setTitle(e.target.value)	
	}
	
	useEffect(() => {
		if(editItem){
			setTitle(editItem.title)
		} else {
			setTitle("")
		}
	}, [editItem])
	
	return (
		<form className="form" onSubmit={handleSubmit}>
		<input 
			type="text" 
			className="task-input" 
			placeholder="Add Task..." 
			onChange={handleChange}
			value={title}
			required 
		/>
		<div className="buttons">
			<button type="submit" className="btn add-task-btn">{editItem ? 'Edit' : 'Add'}</button>
			<button onClick={clearList}className="btn clear-btn">Clear</button>
		</div>
		</form>		
	)
}

export default TaskForm
