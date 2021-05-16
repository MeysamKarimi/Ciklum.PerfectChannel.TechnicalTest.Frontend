import axios from 'axios' 

const baseApiUrl = process.env.REACT_APP_API_URL


export const FetchTaskByStatusSrv = async (taskStatus) => {
    console.log('Fetch invoked!');
    const apiUrl = `${baseApiUrl}/GetTaskByStatus/${taskStatus}`;
    try {
        const response = await axios.get(apiUrl);      
        return response.data;
      } catch (error) {
        console.error(error);
      }      
}

export const InsertTaskSrv = async (task) => {
    console.log('Insert invoked!');   
    const apiUrl = `${baseApiUrl}`;
    try {
    const response = await axios.post(apiUrl, task);   
        return response.data;
      }
      catch(error) {
        console.log(error);
      };
}

export const ToggleTaskStatusSrv = async (taskId) => {
    console.log('Toggle invoked!');
    const apiUrl = `${baseApiUrl}/ToggleTaskStatus/${taskId}`;   
    try {
      const response = await axios.put(apiUrl, {});
      return response.data;
    } catch (error) {
      console.log(error);
    }         
}