export const localStore = ()=>{
    const data = JSON.parse(localStorage.getItem("allTasks"));
    if(data){
        return data;
    }
    return [];
};