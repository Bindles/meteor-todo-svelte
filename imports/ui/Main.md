<script>
  import BlogPost from './BlogPost.svelte';
  import Login from './Login.svelte';

  let currentUser;
  Tracker.autorun(() => {
    currentUser = Meteor.user();
  });
</script>


  <h1>Welcome, {currentUser.username}!</h1>
  <button on:click={() => Meteor.logout()}>Logout</button>
  <BlogPost />

  <Login />

