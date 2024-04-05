import React, { useState, useEffect } from 'react';
import Task from '../Task/Task.jsx';
import InputTask from '../InputTask/InputTask.jsx'
import Switch from '../Switch/Switch.jsx';
import './TodoList.css'

export default function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [taskRender, setTaskRender] = useState([])
    const [newTask, setNewTask] = useState('');
    const [stateSwitch, setStateSwitch] = useState('left')
    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    }

    const addTask = (taskContent) => {
        const newTaskObject = { id: tasks.length + 1, content: taskContent, completed: false };
        setTasks([...tasks, newTaskObject]);
        localStorage.setItem('tasks', JSON.stringify([...tasks, newTaskObject]))
        setNewTask('');
        setNewTaskRender([...tasks, newTaskObject])
    };

    const removeTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
        localStorage.setItem('tasks', JSON.stringify(tasks.filter((task) => task.id !== id)))
        setNewTaskRender(tasks.filter((task) => task.id !== id))
    };

    function editTask(id, inputContent) {
        const changeName = (id) => {
            return tasks.map((task) => {
                if (task.id === id) {
                    return { ...task, content: inputContent };
                }
                return task;
            })
        }
        console.log(changeName(id))
        setTasks(changeName(id));
        localStorage.setItem('tasks', JSON.stringify(changeName(id)))
    }



    const setNewTaskRender = (newTask) => {
        console.log(newTask)
        switch (stateSwitch) {
            case 'left':
                console.log('l')
                setTaskRender(JSON.parse(localStorage.getItem('tasks')))
                break;
            case 'center':
                console.log('c')
                setTaskRender(filterByCompleted(true))
                break;
            case 'right':
                console.log('r')
                setTaskRender(filterByCompleted(false))
                break
        }
    }

    const toggleCompleted = (id) => {
        localStorage.setItem('tasks', JSON.stringify(toggleState(id)))
        setTasks(toggleState(id));
        setNewTaskRender(toggleState(id))

    };

    function toggleState(id) {
        return tasks.map((task) => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        })
    }

    const filterByCompleted = (state) => {
        return JSON.parse(localStorage.getItem('tasks')).filter(obj => obj.completed === state);
    };

    useEffect(() => {
        setNewTaskRender()
    }, [stateSwitch])



    useEffect(() => {
        setTaskRender(JSON.parse(localStorage.getItem('tasks')))
        setTasks(JSON.parse(localStorage.getItem('tasks')))

    }, [])

    return (
        <div className="todo-list">
            <h1>To Do List</h1>
            <Switch stateSwitch={stateSwitch} setStateSwitch={setStateSwitch} />

            <div className="todo-list__task-list">

                {taskRender.map((task) => (
                    <Task
                        key={task.id}
                        id={task.id}
                        content={task.content}
                        completed={task.completed}
                        onRemove={removeTask}
                        onToggleCompleted={toggleCompleted}
                        onEdit={editTask}
                    />
                ))}
            </div>
            <InputTask
                value={newTask}
                onChange={handleInputChange}
                placeholder="Добавте задание"
                addTask={addTask} newTask={newTask}
            />
        </div>
    );
}
