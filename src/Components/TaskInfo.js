import React from 'react'

export const TaskInfo = ({ task, toggleStatus }) => {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                <p className="card-text">{task.description}</p>
                <button onClick={() => toggleStatus(task)} className={task.status == 0 ?
                    'btn btn-success mr-2' : 'btn btn-warning mr-2'}>
                    {task.status == 0 ? 'Done' : 'Undo'}
                </button>
            </div>
        </div>
    )
}