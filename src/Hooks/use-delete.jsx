const useDelete=()=>{
    function deleteHandler(url,id,get){
        fetch(`${url}/${id}.json`,{method: 'DELETE'})
        .then(()=>get(`${url}.json`)).catch(e=>console.log(e))
    }
    return deleteHandler
}
export default useDelete