<script>
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import CountdownBanner from '$lib/components/CountdownBanner.svelte';
    import { updated } from '$app/state';
    let { children } = $props();

</script>
  
  <!-- <CountdownBanner /> -->
  <Navbar />
  
  <main data-sveltekit-reload={updated.current ? '' : 'off'}>
    {@render children()}
  </main>
  
  <Footer />

<style>
  :global(.navbar.dark-header) {   
    padding-top: 20px !important;
    background-color: #07232f !important;
  }
  
  :global(.navbar) {
    top: 72px !important;
    z-index: 1000 !important;
  }
  
  :global(.w-nav-overlay) {
    z-index: 1001 !important;
  }
  
  :global(.menu-button) {
    z-index: 1002 !important;
    position: relative !important;
  }
  
  :global(main) {
    padding-top: 135px;
  }
  
  :global(.primary-button) {
    transform: scale(0.8) !important;
  }
  
  :global(html, body) {
    overflow-x: hidden;
    max-width: 100vw;
  }
  
  :global(*) {
    box-sizing: border-box;
  }

  @media screen and (max-width: 991px) {
    :global(.navbar) {
      position: relative !important;
      top: auto !important;
    }
    
    :global(main) {
      padding-top: 0;
    }
  }
</style>
  

