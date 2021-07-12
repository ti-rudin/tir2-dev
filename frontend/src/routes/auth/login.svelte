<script>
  import { goto, stores } from '@sapper/app';
  import Cookies from './../../helpers/Cookies'

  const { session } = stores();

  let identifier = '';
  let password = '';
  let errorMsg = '';

  async function login() {
    try {
      const res = await fetch(`http://localhost:1337/auth/local`, {
        method: 'POST',
        /*credentials: 'include',*/
        mode: 'cors',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ identifier, password }),
      });
      const data = await res.json();

      if(data.error) {
        errorMsg = data.message[0].messages[0].message
      } else {
        errorMsg = '';
        Cookies.setCookie('token', data.jwt, 1);
        Cookies.setCookie('profile', btoa(JSON.stringify(data.user)), 1);
        session.set({ 
          authenticated: true, 
          user: { 
            ...data.user, 
            scope: data.user.role.type,
          } 
        });
        await goto('/')
      }
    } catch (e) {
      errorMsg = e.message
    }
  }
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>


{#if $session.authenticated}
  <p>You are logged in as {$session.user.username}</p>
{:else}
  <h1>Login</h1>
  <form on:submit|preventDefault={login}>
    <label for="identifier">Username</label>
    <input type="text" id="identifier" name="identifier" bind:value={identifier} required>
    <br>
    <label for="password">Password</label>
    <input type="password" id="password" name="password" bind:value={password} required>
    <br>
    {#if errorMsg}
      <span style="color:red;">{errorMsg}</span>
    {/if}
    <br>
    <button type="submit" disabled={!identifier || !password}>Login</button>
  </form>
{/if}
