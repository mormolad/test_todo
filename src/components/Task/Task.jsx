
import './Task.css'
import { useState } from 'react';

export default function Task({ id, content, completed, onRemove, onToggleCompleted, onEdit }) {
    const [isEdit, setIsEdit] = useState(false)
    const [inputContent, setInputContent] = useState(content);

    const headleOnEdit = () => {
        setIsEdit(!isEdit)
    }

    const handleInput = (e) => { setInputContent(e.target.value); }

    const hendleDoneEdit = () => {
        onEdit(id, inputContent)
        setIsEdit(!isEdit)
    }


    return (<div className={`task ${completed && 'task__done'}`}>
        {isEdit ? <input className='task__content task__content_input' onChange={handleInput} value={inputContent} /> : <p className="task__content">{inputContent}</p>}
        <button
            className="task__button task__button_edit"
            aria-label="кнопка редактирования задания"
            onClick={isEdit ? hendleDoneEdit : headleOnEdit}
        />
        <button
            className="task__button task__button_done"
            aria-label="кнопка завершения задания"
            onClick={() => onToggleCompleted(id)}
        />
        <button
            className="task__button task__button_delete"
            aria-label="кнопка удаления задания"
            onClick={() => onRemove(id)}
        />
    </div>
    );
}

