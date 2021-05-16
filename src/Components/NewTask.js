import React from 'react'
import { useForm } from 'react-hook-form';

export const NewTask = ({ saveTask, emptyTask }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    React.useEffect(() => {
        reset({ ...emptyTask });
    }, [emptyTask])

    const submitForm = data => {
        console.log(data);
        saveTask(data);
    };

    return (
        // <form onSubmit={handleSubmit(submitForm)}>
        //     <div className="form-group">
        //         <lable htmlFor="title">Title</lable>
        //         <input type="text" id="title" {...register('title', { required: true })} className="form-control"></input>
        //         {errors.title && errors.title.type === "required" && <small className="form-text text-danger">Task title is mandatory</small>}
        //     </div>
        //     <div className="form-group">
        //         <lable htmlFor="description">Description</lable>               
        //         <textarea  id="description" {...register('description')} className="form-control"></textarea>
        //     </div>
        //     <button type="submit" className="btn btn-primary"  >Add New Task</button>
        // </form>
        <>
            <div className="row justify-content-center mb-4">
                <div className="col-8">
                    <div className="card">
                        <div className="shadow-lg card-body rounded">
                            <form onSubmit={handleSubmit(submitForm)}>
                                <div className="row">
                                    <div className="col-4 mb-3">
                                        <input type="text" {...register('title', { required: true })} className="form-control" id="title" placeholder="Task Title" />
                                        {errors.title && errors.title.type === "required" && <small className="form-text text-danger">Task title is mandatory</small>}
                                    </div>
                                    <div className="col-6 mb-3">
                                        <input type="text"  {...register('description')} type="text" placeholder="Description" className="form-control" id="description" rows="3" />
                                    </div>
                                    <div className="col-auto">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
