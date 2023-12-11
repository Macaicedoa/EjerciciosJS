async function asyncTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    //console.log(response);
    const todos = await response.json();
    console.log(todos)
}

asyncTodos()