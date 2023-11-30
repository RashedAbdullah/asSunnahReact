export const localStorageData = ()=>{
    const storeData = JSON.parse(localStorage.getItem("userData"));
    if(storeData){
        return storeData;
    }
    return [];
}