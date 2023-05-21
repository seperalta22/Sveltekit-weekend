<script lang="ts">
  import { onDestroy, onMount } from "svelte";

console.log('hello from home page');

onMount(() => {
  console.log('mounted home page');
});

onDestroy(() => {
  console.log('destroyed home page');
});
</script>

<h1>Home page</h1>
