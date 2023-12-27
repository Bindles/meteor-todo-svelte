<script>
  import { onMount } from 'svelte';
  import NewPost from './NewPost.svelte';

  let posts = [];

  onMount(() => {
    Tracker.autorun(() => {
      posts = Posts.find().fetch();
    });
  });
</script>

<h2>Blog Posts</h2>
<ul>
  {#each posts as post (post._id)}
    <li>{post.title}</li>
  {/each}
</ul>

<NewPost/>