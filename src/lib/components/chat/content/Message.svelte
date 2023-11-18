<script lang="ts">
  import { formatRelative } from 'date-fns';

  export let sender: boolean;
  export let content: string;
  export let date: Date;

  const relativeDate = formatRelative(date, Date.now());

  const formattedDate = relativeDate[0].toUpperCase() + relativeDate.slice(1);
</script>

<div>
  <div class="text-sm font-light">
    <span class="font-normal">{sender ? 'You' : 'Orator'}</span>, {formattedDate}
  </div>
  <div class="bg-slate-300 px-4 py-2 rounded-lg">{content}</div>
</div>
