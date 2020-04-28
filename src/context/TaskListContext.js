import React, {createContext, useState, useEffect} from 'react'
import { v1 as uuid } from 'uuid'

export const TaskListContext = createContext()

const TaskListContextProvider = props => {
	const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
	const [tasks, setTasks] = useState(initialState)	
	const [editItem, setEditItem] = useState(null)
	
	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);
	
	const addTask = (title) => {
		setTasks([...tasks, { title, id: uuid(), completed:false }])	
	}

	const removeTask = id => {
		setTasks(tasks.filter(task => task.id !== id))			
	}

	const handleChecked = id => {
		let updatedTasks = tasks.map(task => {if(task.id === id){task.completed = !task.completed} return task})
		setTasks(updatedTasks)
	}

	const clearList = () => {
		setTasks([])	
	}
	
	const findItem = id => {
		const item = tasks.find(task => task.id === id)
		setEditItem(item)
	}

	const editTask = (title,id) => {
		const newTasks = tasks.map(task => (task.id === id) ? {title, id} : task)
		setTasks(newTasks)
		setEditItem()
	}
	
	return (
		<TaskListContext.Provider value={{tasks, addTask, removeTask, clearList, findItem, editTask, editItem, handleChecked}}>
			{props.children}
		</TaskListContext.Provider>
	)
}

export default TaskListContextProvider;
