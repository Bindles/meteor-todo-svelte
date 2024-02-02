<!-- Todo.svelte -->
<script>
  let taskz = [
    { _id: 'task_1', text: 'This is task 1' },
    { _id: 'task_2', text: 'This is task 2' },
    { _id: 'task_3', text: 'This is task 3' },
  ];

  let newTaskText = '';

  function addTodoItem() {
    const newId = `task_${taskz.length + 1}`;
    taskz = [...taskz, { _id: newId, text: newTaskText }];
    newTaskText = ''; // Clear the input field after adding the task
    console.log(taskz);
  }
</script>

<div class="container">
    <header>
        <h1>Todo List</h1>
    </header>
    <ul>
      {#each taskz as task (task._id)}
        <li>{task._id} {task.text}</li>
      {/each}
    </ul>
    <input type="text" bind:value={newTaskText} placeholder="Enter task text">
    <button on:click={addTodoItem}>Add Task</button>
</div>
