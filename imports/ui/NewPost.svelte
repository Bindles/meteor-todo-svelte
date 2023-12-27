<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let title = '';

  function handleSubmit() {
    if (title.trim() !== '') {
      Meteor.call('insertPost', title, (error, result) => {
        if (error) {
          alert(error.reason);
        } else {
          dispatch('postCreated', { postId: result });
          title = ''; // Clear the input field after submission
        }
      });
    }
  }
</script>

<h2>Create a New Post</h2>
<form on:submit|preventDefault={handleSubmit}>
  <label>
    Title:
    <input bind:value={title} type="text" required>
  </label>
  <button type="submit">Submit</button>
</form>
