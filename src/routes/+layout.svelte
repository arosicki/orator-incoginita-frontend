<script lang="ts">
  import Header from '$lib/components/layout/Header.svelte';
  import '../app.css';
</script>

<div class="w-screen h-screen overflow-hidden">
  <Header />
  <main class="bg-sky-100 w-full h-full-12 flex-grow mt-12 overflow-y-auto">
    <slot />
  </main>
</div>
