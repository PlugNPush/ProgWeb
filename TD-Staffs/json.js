function downloadTasks() {
    fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json()).then(function (data) {
        // Array of 200 JSON objects with 4 values for each object:
        // userId, id, title and completed

        // Raw data log
        console.log('data', data)

        // Saving the data to the document shared "memory space" to reuse it later
        document.data = data;
        processTasks();
    })
}

function processTasks(){
    document.data.forEach(function(item, index, array) {
        console.log("UserID = " + item.userId + ", ID = " + item.id + ", Title = " + item.title + ", Completed = " + item.completed);
    });
}

getTasks();