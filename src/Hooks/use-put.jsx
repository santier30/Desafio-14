const usePut=()=>{
    function putHandler(url,id,get,data){
        fetch(`${url}/${id}.json`,{method: 'put',body:JSON.stringify(data)})
        .then(()=>get(`${url}.json`)).catch(e=>console.log(e))
    }
    return putHandler
}
export default usePut