<script>
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import CountdownBanner from '$lib/components/CountdownBanner.svelte';
    import { updated } from '$app/state';
    let { children } = $props();

</script>
  
  <Navbar />
  <CountdownBanner />
  
  <main data-sveltekit-reload={updated.current ? '' : 'off'}>
    {@render children()}
  </main>
  
  <Footer />
  

