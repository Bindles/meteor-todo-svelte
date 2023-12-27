<script>
  import { Meteor } from "meteor/meteor";
  import { LinksCollection } from '../api/links';
  import Task from "./Task.svelte";
  
  import BlogPost from './BlogPost.svelte';
  import Login from './Login.svelte';

    const getTasks = () => ([
        { _id: 'task_1', text: 'This is task 1' },
        { _id: 'task_2', text: 'This is task 2' },
        { _id: 'task_3', text: 'This is task 3' },
    ])
  
  let counter = 0;
  const addToCounter = () => {
    counter += 1;
  }
  
  let subIsReady = false;
  $m: {
    const handle = Meteor.subscribe("links.all");
    subIsReady = handle.ready();
  }

  // more information about $m at https://atmospherejs.com/zodern/melte#tracker-statements
  let links;
  $m: links = LinksCollection.find().fetch();
</script>

  <BlogPost />

  <Login />

<div class="container">
    <header>
        <h1>Todo List</h1>
    </header>

    <ul>
        {#each getTasks() as task (task._id)}
            <Task task={task} />
        {/each}
    </ul>
</div>

<div class="container">
  <h1>Welcome to Meteor!</h1>

  <button on:click={addToCounter}>Click Me</button>
  <p>You've pressed the button {counter} times.</p>

  <h2>Learn Meteor!</h2>
  {#if subIsReady}
    <ul>
      {#each links as link (link._id)}
        <li><a href={link.url} target="_blank" rel="noreferrer">{link.title}</a></li>
      {/each}
    </ul>
  {:else}
    <div>Loading ...</div>
  {/if}
  <h2>Typescript ready</h2>
  <p>Just add lang="ts" to .svelte components.</p>
</div>
