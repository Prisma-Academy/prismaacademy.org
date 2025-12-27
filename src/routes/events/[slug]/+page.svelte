<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const { event } = data;

	let isModalOpen = $state(false);
	let currentPhotoIndex = $state(0);

	function openModal(index: number) {
		currentPhotoIndex = index;
		isModalOpen = true;
	}

	function closeModal() {
		isModalOpen = false;
	}

	function nextPhoto() {
		currentPhotoIndex = (currentPhotoIndex + 1) % event.photos.length;
	}

	function prevPhoto() {
		currentPhotoIndex = (currentPhotoIndex - 1 + event.photos.length) % event.photos.length;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (!isModalOpen) return;
		if (e.key === 'Escape') closeModal();
		if (e.key === 'ArrowRight') nextPhoto();
		if (e.key === 'ArrowLeft') prevPhoto();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<SEO
	title="{event.title} – Photos – Prisma Academy"
	description="View photos from {event.title}"
	keywords="Prisma Academy, {event.title}, event photos"
	url="https://prismaacademy.org/events/{event.slug}"
/>

<div class="section event-3-banner">
	<div class="base-container w-container">
		<div class="banner-event-wrapper gallery-banner" style="background-image: url('/images/events/{event.slug}/{event.photos[0]}');">
			<h1 class="gallery-title">{event.title}</h1>
			<p class="paragraph-large gallery-date">{event.date}</p>
		</div>
	</div>
</div>

<section class="section gallery-section">
	<div class="w-layout-blockcontainer base-container w-container">
		{#if event.photos && event.photos.length > 0}
			<div class="photo-gallery-grid">
				{#each event.photos as photo, index}
					<div class="photo-item" role="button" tabindex="0" onclick={() => openModal(index)} onkeydown={(e) => e.key === 'Enter' && openModal(index)}>
						<img
							src="/images/events/{event.slug}/{photo}"
							alt="{event.title} - Photo"
							loading="lazy"
						/>
					</div>
				{/each}
			</div>
		{:else}
			<p class="paragraph-large">Photos coming soon!</p>
		{/if}
	</div>
</section>

{#if isModalOpen}
	<div class="modal-overlay" onclick={closeModal} onkeydown={(e) => e.key === 'Enter' && closeModal()} role="button" tabindex="-1">
		<button class="modal-close" onclick={closeModal} aria-label="Close modal">&times;</button>
		<button class="modal-nav modal-prev" onclick={(e) => { e.stopPropagation(); prevPhoto(); }} aria-label="Previous photo">
			&#8249;
		</button>
		<button class="modal-nav modal-next" onclick={(e) => { e.stopPropagation(); nextPhoto(); }} aria-label="Next photo">
			&#8250;
		</button>
		<div class="modal-content" onclick={(e) => e.stopPropagation()} onkeydown={(e) => e.key === 'Enter' && e.stopPropagation()} role="dialog" tabindex="0">
			<img
				src="/images/events/{event.slug}/{event.photos[currentPhotoIndex]}"
				alt="{event.title} - Photo {currentPhotoIndex + 1}"
				class="modal-image"
			/>
			<div class="modal-counter">
				{currentPhotoIndex + 1} / {event.photos.length}
			</div>
		</div>
	</div>
{/if}

<style>
	.gallery-section {
		padding-top: 30px !important;
	}

	.gallery-banner {
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		position: relative;
		padding: 2rem;
		border-radius: 8px;
	}

	.gallery-banner::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 0;
		border-radius: 8px;
	}

	.gallery-banner h1,
	.gallery-banner p {
		position: relative;
		z-index: 1;
	}

	.gallery-title {
		color: #f0f0f0 !important;
		opacity: 0.95 !important;
	}

	.gallery-date {
		color: #e8e8e8 !important;
		opacity: 0.9 !important;
	}

	.photo-gallery-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: 1.5rem;
		margin-top: 2rem;
	}

	@media screen and (max-width: 991px) {
		.photo-gallery-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media screen and (max-width: 479px) {
		.photo-gallery-grid {
			grid-template-columns: 1fr;
		}
	}

	.photo-item {
		overflow: hidden;
		border-radius: 8px;
		background: #f5f5f5;
		cursor: pointer;
		height: 200px;
	}

	.photo-item img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: transform 0.3s ease;
	}

	.photo-item:hover img {
		transform: scale(1.05);
	}

	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.9);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 9999;
	}

	.modal-content {
		position: relative;
		max-width: 90vw;
		max-height: 90vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.modal-image {
		max-width: 100%;
		max-height: 90vh;
		object-fit: contain;
		border-radius: 8px;
	}

	.modal-close {
		position: fixed;
		top: 20px;
		right: 20px;
		background: none;
		border: none;
		color: white;
		font-size: 40px;
		cursor: pointer;
		padding: 0;
		line-height: 1;
		z-index: 10001;
	}

	.modal-close:hover {
		color: #ccc;
	}

	.modal-nav {
		position: fixed;
		top: 50%;
		transform: translateY(-50%);
		background-color: rgba(255, 255, 255, 0.2);
		border: none;
		color: white;
		font-size: 60px;
		cursor: pointer;
		padding: 0 0 5px 0;
		border-radius: 4px;
		transition: background-color 0.3s ease;
		z-index: 10001;
		line-height: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 70px;
		width: 60px;
		font-family: Arial, sans-serif;
	}

	.modal-nav:hover {
		background-color: rgba(255, 255, 255, 0.3);
	}

	.modal-prev {
		left: 20px;
	}

	.modal-next {
		right: 20px;
	}

	.modal-counter {
		margin-top: 20px;
		color: white;
		font-size: 16px;
		background-color: rgba(0, 0, 0, 0.5);
		padding: 8px 16px;
		border-radius: 4px;
	}

	@media screen and (max-width: 767px) {
		.modal-nav {
			font-size: 40px;
			padding: 5px 15px;
		}

		.modal-prev {
			left: 10px;
		}

		.modal-next {
			right: 10px;
		}
	}
</style>
