
const usePost = ()=>{

  const post = async (data,url,get) => {

      try {
        await     fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })
          .then(response => response.json())
          .then(data => {
  
          })
          .catch(error => {
            console.error(error);
          });

        get(url)

      } catch (error) {
        console.error("Error creating data:", error);
      }
    
  };
    return post;
}
export default usePost;