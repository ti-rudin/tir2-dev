<script>
  import { stores } from '@sapper/app'
  const { session } = stores()
</script>

<svelte:head>
  <title>{$session.user.username} Profile</title>
</svelte:head>

<h1>Profile</h1>

<pre>
  {JSON.stringify($session.user, null, 4)}
</pre>
