import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import TaskInfo from './TaskInfo';
import { InitialPendingTasks } from '../TempData/InitialData';

afterEach(cleanup);

const toggleTaskStatus = toggleStatus => {
    let toggledTask = { ...toggledTask, status: '1' };
    //remove from pending
    const filteredPendingTasks = PendingTasks.filter(q => q.id != toggledTask.id);
    setPendingTasks([...filteredPendingTasks]);
    //add to completed            
    setCompletedTasks([...CompletedTasks, toggledTask]);
}
const task = InitialPendingTasks[0];

it('ToggleStatus changes the status from pending to completed after click on Done', () => {
    
    const { getByText, getByLabelText } = render(
        <TaskInfo task={task} toggleStatus={toggleStatus} />
    );

    expect([...CompletedTasks]).not.toEqual(         
        expect.arrayContaining([    
          expect.objectContaining({   
            type: task               
          })
        ])
      )

    fireEvent.click(getByText(/Undo/i));
  
    expect([...CompletedTasks]).toEqual(         
        expect.arrayContaining([    
          expect.objectContaining({   
            type: task               
          })
        ])
      )
});