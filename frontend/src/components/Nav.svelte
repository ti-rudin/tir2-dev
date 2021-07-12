<script>
  import { stores } from '@sapper/app'
  
  const { session } = stores()

	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 600;
		padding: 0 1em;
    display: flex;
    justify-content: space-between;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a, .hello {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
  .hello { font-weight: 300; }

  a.profile-link {
    padding: 0;
    display: inline-block;
    text-decoration: underline; 
    font-weight: 600;
  }
</style>

<nav>
  <ul>
      <li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
	  <li><a aria-current="{segment === 'bots' ? 'page' : undefined}" href="bots">bots</a></li>
	  <li><a aria-current="{segment === 'newbot' ? 'page' : undefined}" href="newbot">newbot</a></li>
      <li><a aria-current="{segment === 'settings' ? 'page' : undefined}" href="settings">settings</a></li>
  </ul>

  <ul>
    {#if $session.authenticated}
      <li class="hello">
        You are logged in as <a href="profile" class="profile-link">{$session.user.username}</a>
      </li>
    {/if}
    {#if $session.authenticated}
      <li>
        <a href='/auth/logout'>log out</a>
      </li>
    {:else}
      <li><a aria-current="{segment === 'auth' ? 'page' : undefined}" href="/auth/login">Login</a></li>
    {/if}
  </ul>

</nav>
