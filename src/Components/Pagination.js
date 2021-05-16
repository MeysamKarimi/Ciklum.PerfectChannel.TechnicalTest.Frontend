import React, { component } from 'react'

const Pagination = ({ tasksPerPage, totalTasks, paginate }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalTasks / tasksPerPage); i++) {
        pageNumbers.push(i);
    }

    return(
    <div>
        <nav>
            <ul class="pagination pagination-sm justify-content-center">
                {pageNumbers.map(number => (
                    <li className="page-item" key={number}>
                        <a onClick={() => paginate(number)} className="page-link" href="#">{number}</a>
                    </li>
                ))}

            </ul>
        </nav>
    </div>
    )
}

export default Pagination