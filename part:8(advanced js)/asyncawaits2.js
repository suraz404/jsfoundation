function fetchPostData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Post Data Fetech");
        }, 2000);
    })
}
function fetchCommentData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Comment Data Fetched");
        }, 3000);
    })
}

//fetch two data

async function getBlogData(){
    try {
        console.log("Fetching Blog data");
        // const blogData =await fetchPostData()
        // const commentData=await fetchCommentData();
        const [blogData,commentData]=await Promise.all([fetchCommentData(),fetchPostData()])
        console.log(blogData);
        console.log(commentData);
        
        console.log("fetch completed")
        
        
    } catch (error) {
        console.error("Error fetching blog data")
    }
}
getBlogData();