import React from 'react';
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import Header from './components/Header'
import TaskListContextProvider from './context/TaskListContext'
import './App.css';

const App = () => {
  return (
	<TaskListContextProvider>
    		<div className="main">
			<div className="app-wrapper">
				<Header />
				<TaskList />
				<TaskForm />
			</div>
		</div>
	</TaskListContextProvider>
  );
}

export default App;
