<script lang="ts">
  import Message from './Message.svelte';

  const fakeMessages = [
    {
      id: 1,
      sender: false,
      content: 'Hello, how are you?',
      date: new Date(Date.now() - 1000 * 62 * 60),
    },
    {
      id: 2,
      sender: true,
      content: 'Hello, good, you?',
      date: new Date(Date.now() - 1000 * 61 * 60),
    },
    {
      id: 3,
      sender: false,
      content:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: new Date(Date.now() - 1000 * 60 * 60),
    },
    {
      id: 4,
      sender: true,
      content:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: new Date(Date.now() - 1000 * 59 * 60),
    },
    {
      id: 5,
      sender: true,
      content:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: new Date(Date.now() - 1000 * 58 * 60),
    },
    {
      id: 6,
      sender: true,
      content:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: new Date(Date.now() - 1000 * 57 * 60),
    },
    {
      id: 7,
      sender: true,
      content:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: new Date(Date.now() - 1000 * 56 * 60),
    },
    {
      id: 8,
      sender: true,
      content:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: new Date(Date.now() - 1000 * 55 * 60),
    },
    {
      id: 9,
      sender: true,
      content:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: new Date(Date.now() - 1000 * 54 * 60),
    },
    {
      id: 10,
      sender: true,
      content:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: new Date(Date.now() - 1000 * 53 * 60),
    },
    {
      id: 11,
      sender: true,
      content:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: new Date(Date.now() - 1000 * 52 * 60),
    },
  ];
</script>

<div class="overflow-auto h-full bg-slate-200">
  <div class="flex gap-4 flex-col overflow-visible justify-end bg-slate-200 p-4">
    {#each fakeMessages.slice(0, 3) as { id, sender, content, date } (id)}
      <Message {sender} {content} {date} />
    {/each}
  </div>
</div>
