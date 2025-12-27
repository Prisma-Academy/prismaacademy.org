<script lang="ts">
  export let date: string;
  export let title: string;
  export let description: string;
  export let imageUrl: string;
  export let imageAlt: string = '';
  export let learnMoreUrl: string;
  export let slug: string;
  export let photos: string[] = [];
</script>

<li class="list-item list-item-full-width">
  <div class="w-layout-blockcontainer container-5 w-container" >
    <img
      src={imageUrl}
      alt={imageAlt}
      loading="lazy"
      width="Auto"
      height="300"
    />
  </div>
  <div class="w-layout-blockcontainer container-4 w-container"  style="width: 100%;">
    <h5>{@html date}</h5>
    <h3>{@html title}</h3>
    <p class="paragraph-8">
      {@html description}
    </p>
    <div class="event-buttons">
      <a href={learnMoreUrl} class="event-learn-more-button">Learn More</a>
      {#if photos && photos.length > 0}
        <a href="/events/{slug}" class="event-learn-more-button event-photos-button">View Photos</a>
      {/if}
    </div>
  </div>
</li>

<style>
  .event-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .event-photos-button {
    background-color: #f4a261;
    border-color: #f4a261;
  }

  .event-photos-button:hover {
    background-color: #e76f51;
    border-color: #e76f51;
  }
</style>