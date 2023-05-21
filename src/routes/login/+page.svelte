<script lang="ts">
  import { enhance } from "$app/forms";
</script>

<h1>Log In</h1>

<form method="POST" action="?/login" use:enhance>
  <label>
    <input type="text" name="username" placeholder="Username" />
    <input type="password" name="password" placeholder="Password" />
    <button type="submit">Log In</button>
  </label>
</form>

<style>
  h1 {
    margin: 0 0 1em 0;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 0.25em;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin: 0 auto;
    width: 20em;
  }

  input {
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: 0.25em;
  }

  button {
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: 0.25em;
    background: #eee;
  }
</style>
