<script lang="ts">
  let count: number = $state(0);
  const increment = (number: number) => {
    var n = 'nnnnn';
    let l = 'lllll';
    console.log('start::', number, n);
    count += number;
  };
</script>

<button onclick={() => increment(1)}>
  count is {count}
</button>
