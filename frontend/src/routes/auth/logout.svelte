<script>
  import { goto, stores } from '@sapper/app';
  import Cookies from './../../helpers/Cookies'
	import { onMount } from 'svelte';

  const { session } = stores();

  session.set({ authenticated: false, user: null })
  goto('/auth/login')

	onMount(() => {
    Cookies.deleteCookie('token');
    Cookies.deleteCookie('profile');
	});
</script>
