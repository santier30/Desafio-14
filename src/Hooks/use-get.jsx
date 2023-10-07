import { useState,useCallback } from "react";
const useGet = ()=>{
    const [notes,setNotes]=useState([]);
    const get = useCallback((url)=>{
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            for(let key in data){
                data[key].key = key
            }
            if(data!=null){
               setNotes([...Object.values(data)]); 
            }else{setNotes([])}
            
            

        })
        .catch((error) => {
          console.error(error);
        });
  },[]);
    
        return [get,notes];
    }
    export default useGet;