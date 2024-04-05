import './InputTask.css'

export default function InputTask({ value, onChange, placeholder, addTask, newTask }) {

    return <div className="input-task">
        <input type="text" className='input-task__input' value={value} onChange={onChange} placeholder={placeholder} />
        <button className="input-task__button" onClick={() => addTask(newTask)}>Add Task</button>
    </div>
}