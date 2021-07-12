<svelte:head>
	<title>bots</title>
</svelte:head>

<script>
  import { stores } from '@sapper/app'
  const { session } = stores()
</script>


<h1>bots</h1>

<pre>
  {JSON.stringify($session.user.bots, null, 4)}
</pre>
