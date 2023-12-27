<script>
  import { onMount } from 'svelte';

  let email;
  let password;

  onMount(() => {
    email = '';
    password = '';
  });

  function login() {
    Meteor.loginWithPassword(email, password, (error) => {
      if (error) {
        alert(error.reason);
      }
    });
  }
</script>

<h2>Login</h2>
<form on:submit|preventDefault={login}>
  <label>Email:
    <input bind:value={email} type="email" required>
  </label>
  <br>
  <label>Password:
    <input bind:value={password} type="password" required>
  </label>
  <br>
  <button type="submit">Login</button>
</form>
