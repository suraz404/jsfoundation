//Creating promises
function fetchData(){
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        let score = true;
        if (score) {
            resolve("Data Fetched succesfull")
        }
        else{
            reject("Error fetching data")
        }
    }, 3000);
    })
}
//Consuming Promises
fetchData()
    .then((data)=>{//for resolve data
     console.log(data)
     return data.toLowerCase()
    })
    .then((value)=>{

    })
    .catch((error)=>{ //for reject
    console.log(error)
    })
