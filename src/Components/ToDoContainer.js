import React from 'react'
import { InitialPendingTasks, InitialCompletedTasks, StatueEnum, EmptyTask } from '../TempData/InitialData.js';
import { TaskList } from './TaskList.js';
import { NewTask } from './NewTask.js';
import { FetchTaskByStatusSrv, InsertTaskSrv, ToggleTaskStatusSrv } from '../Services/ServiceHandlers';


export const ToDoContainer = () => {
   
    const [PendingTasks, setPendingTasks] = React.useState([])
    const [CompletedTasks, setCompletedTasks] = React.useState([])
    const [emptyTaskItem, setEmptyTaskItem] = React.useState({});
     const [loading, setLoading] = React.useState(false);

    React.useEffect(async () => {
        setLoading(true);
        const initialPendingTasksResponse = await FetchTaskByStatusSrv('0');
        setPendingTasks(initialPendingTasksResponse);       

        const initialCompeletedTasksResponse = await FetchTaskByStatusSrv('1');
        setCompletedTasks(initialCompeletedTasksResponse);
        setLoading(false);
        
    }, [])  

    const saveNewTask = async (task) => {
        setLoading(true);
        const insertResponse = await InsertTaskSrv(task);
        console.log('Insert response3');
        task = { ...task, id: insertResponse.id, status: '0' };
        const newList = [...PendingTasks, task];
        setPendingTasks([...newList]);
        setEmptyTaskItem({ ...EmptyTask });
        setLoading(false);     
    }

    const toggleTaskStatus = async toggledTask => {
        setLoading(true);
        console.log(toggledTask);
        //call Api
        const toggleRespons = await ToggleTaskStatusSrv(toggledTask.id);

        if (toggleRespons) {
            if (parseInt(toggledTask.status) === 1) {
                toggledTask = { ...toggledTask, status: '0' };
                //remove from completed
                const filteredCompletedTasks = CompletedTasks.filter(q => q.id != toggledTask.id);
                setCompletedTasks([...filteredCompletedTasks]);
                //add to pending
                setPendingTasks([...PendingTasks, toggledTask]);
            }
            else {
                toggledTask = { ...toggledTask, status: '1' };
                //remove from pending
                const filteredPendingTasks = PendingTasks.filter(q => q.id != toggledTask.id);
                setPendingTasks([...filteredPendingTasks]);
                //add to completed            
                setCompletedTasks([...CompletedTasks, toggledTask]);               
            }
            setLoading(false);
        }
    }

    return (
        <>
            <div className="continer mt-3">
                <h1 className="text-center text-secondary">To-do List App</h1>
            </div>
            <div className="container mt-3">
                <NewTask saveTask={saveNewTask} emptyTask={emptyTaskItem} />
                <hr className="shadow-lg bg-secondary" />
                <div className="row mt-5">
                    <TaskList data={PendingTasks} toggleStatus={toggleTaskStatus} componentTitle={"Pending"} />
                    <TaskList data={CompletedTasks} toggleStatus={toggleTaskStatus} componentTitle={"Completed"} />
                </div>
            </div>           
        </>
    )
}
