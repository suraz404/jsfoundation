/*
Create a function simulateAsyncTask() that logs “Task started”, then after 2 seconds logs “Task finished”.

Use setTimeout to simulate this behaviour.

 */
function simulateAsyncTask(){
    console.log("Task Started")

 setTimeout(() => {
    console.log("Task Completed");
    
 }, 2000);
}
//simulateAsyncTask()
/* 
Create a function simulateMultipleTasks() that starts three asynchronous tasks with different delays (1 second, 2 seconds, and 3 seconds).

Each task should log "Task [n] finished" where [n] is the task number. Ensure the tasks run asynchronously.*/
function simulateMultipleTasks() {
    setTimeout(() => {
      console.log('Task 1 finished');
    }, 1000);
  
    setTimeout(() => {
      console.log('Task 2 finished');
    }, 2000);
  
    setTimeout(() => {
      console.log('Task 3 finished');
    }, 3000);
  }

  //task3
  function suraz(string){
    console.log(string)
  }
  function fetchDataWithCallback(callback){
    setTimeout(() => {
        const data='Fetch Data';
        callback(data)
    }, 2000);

  }
  fetchDataWithCallback(suraz)

 