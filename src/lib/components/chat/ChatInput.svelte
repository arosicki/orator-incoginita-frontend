<script lang="ts">
  import Error from 'carbon-icons-svelte/lib/Error.svelte';
  import Send from 'carbon-icons-svelte/lib/Send.svelte';
  import FaceAdd from 'carbon-icons-svelte/lib/FaceAdd.svelte';

  let textarea: HTMLTextAreaElement;
  let value: HTMLTextAreaElement;

  const onInput = (e: Event) => {
    textarea.style.height = `auto`;
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const onSubmit = (e: Event) => {
    textarea.value = '';
    textarea.style.height = `auto`;
  };
</script>

<div class="bg-slate-300 w-full p-4 flex flex-shrink justify-center items-center gap-2">
  <button class="bg-red-700 rounded-full p-2"><Error class="fill-white" /></button>
  <form class="w-full flex items-center relative" on:submit|preventDefault={onSubmit}>
    <textarea
      bind:this={textarea}
      bind:value
      placeholder="Aa"
      class="w-full bg-slate-100 pl-6 h-12 pr-22 max-h-48 py-3 rounded-3xl resize-none outline-none scroll-py-3 overflow-hidden"
      on:input={onInput}
      rows="1"
    />
    <div class="absolute flex justify-center right-2 gap-2">
      <button class="bg-neutral-500 rounded-full p-2"><FaceAdd class="fill-white" /></button>
      <button class="bg-blue-700 rounded-full p-2"><Send class="fill-white" /></button>
    </div>
  </form>
</div>
