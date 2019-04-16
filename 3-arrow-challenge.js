const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true,
    },
{
    text: 'Clean Yard',
    completed: false
},
{
    text: 'Film course',
    completed: false
}],
getTasksToDo() {
   const taskstodo = this.tasks.filter((task)=>{
       return task.completed === false;
   })
   return taskstodo;
}
}

console.log(tasks.getTasksToDo());
