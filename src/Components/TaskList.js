import React, { useState } from 'react';
import Pagination from './Pagination';
import { TaskInfo } from './TaskInfo';

export const TaskList = ({ data, toggleStatus, componentTitle }) => {

    const [tasks, setTasks] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);
    //const [tasksPerPage, setTasksPerPage] = useState(process.env.REACT_APP_PAGE_ITEM_COUNT);

    const indexOfLastTask = currentPage * process.env.REACT_APP_PAGE_ITEM_COUNT;
    const indexOfFirstTask = indexOfLastTask - process.env.REACT_APP_PAGE_ITEM_COUNT;
    const currentTasks = data.slice(indexOfFirstTask, indexOfLastTask);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="col-6">
            <h5 className={componentTitle == 'Pending' ?
                'text-center bg-warning text-light rounded p-2' : 'text-center bg-success text-light rounded p-2'}>{componentTitle}</h5>
            <div className="card">
                <div className="card-body">
                    {currentTasks.map((task, index) =>
                        <TaskInfo task={task} toggleStatus={toggleStatus} />
                    )}
                    <Pagination tasksPerPage={process.env.REACT_APP_PAGE_ITEM_COUNT} totalTasks={data.length} paginate={paginate} />
                </div>
            </div>
        </div>
    )
}
