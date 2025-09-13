<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let timeLeft = $state({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	});
	
	let interval: NodeJS.Timeout;
	const eventDate = new Date('2025-09-20T12:00:00');

	function updateCountdown() {
		const now = new Date().getTime();
		const distance = eventDate.getTime() - now;

		if (distance > 0) {
			timeLeft.days = Math.floor(distance / (1000 * 60 * 60 * 24));
			timeLeft.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			timeLeft.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			timeLeft.seconds = Math.floor((distance % (1000 * 60)) / 1000);
		} else {
			timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
		}
	}

	onMount(() => {
		updateCountdown();
		interval = setInterval(updateCountdown, 1000);
	});

	onDestroy(() => {
		if (interval) {
			clearInterval(interval);
		}
	});

	// Show banner until event is actually over - for now always show since event is in future
	const isEventOver = $derived(false);
</script>

{#if !isEventOver}
<div class="countdown-banner">
	<div class="countdown-container">
		<div class="countdown-content">
			<div class="countdown-text">
				<span class="countdown-title">🎯 2025 PRISMA Youth Annual Career Meetup</span>
				<span class="countdown-subtitle">September 20, 2025 • 12-3 PM • 116 Industry St.</span>
			</div>
			<div class="countdown-timer">
				<div class="countdown-unit">
					<span class="countdown-number">{timeLeft.days}</span>
					<span class="countdown-label">Days</span>
				</div>
				<div class="countdown-separator">:</div>
				<div class="countdown-unit">
					<span class="countdown-number">{timeLeft.hours.toString().padStart(2, '0')}</span>
					<span class="countdown-label">Hours</span>
				</div>
				<div class="countdown-separator">:</div>
				<div class="countdown-unit">
					<span class="countdown-number">{timeLeft.minutes.toString().padStart(2, '0')}</span>
					<span class="countdown-label">Minutes</span>
				</div>
				<div class="countdown-separator">:</div>
				<div class="countdown-unit">
					<span class="countdown-number">{timeLeft.seconds.toString().padStart(2, '0')}</span>
					<span class="countdown-label">Seconds</span>
				</div>
			</div>
			<a href="/events" class="countdown-button">Learn More</a>
		</div>
	</div>
</div>
{/if}

<style>
	.countdown-banner {
		background: linear-gradient(135deg, var(--secondary) 0%, #0f5aa8 100%);
		color: var(--white);
		padding: 1rem 0;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 999;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}

	.countdown-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
	}

	.countdown-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
	}

	.countdown-text {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.countdown-title {
		font-family: Bricolage Grotesque, sans-serif;
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--primary);
	}

	.countdown-subtitle {
		font-size: 0.875rem;
		color: var(--light-text);
		opacity: 0.9;
	}

	.countdown-timer {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-family: Bricolage Grotesque, sans-serif;
	}

	.countdown-unit {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-width: 3rem;
	}

	.countdown-number {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--primary);
		line-height: 1;
	}

	.countdown-label {
		font-size: 0.75rem;
		font-weight: 400;
		color: var(--light-text);
		opacity: 0.8;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.countdown-separator {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--primary);
		opacity: 0.6;
		margin: 0 0.25rem;
	}

	.countdown-button {
		background-color: var(--primary);
		color: var(--text-dark);
		padding: 0.5rem 1.5rem;
		border-radius: var(--r-4px);
		font-weight: 600;
		font-size: 0.875rem;
		text-decoration: none;
		transition: all 0.3s ease;
		white-space: nowrap;
	}

	.countdown-button:hover {
		background-color: #fff8c4;
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	@media screen and (max-width: 991px) {
		.countdown-banner {
			padding: 1.5rem 0;
			position: static;
			background: linear-gradient(135deg, var(--secondary) 0%, #0f5aa8 100%);
		}
		
		.countdown-content {
			flex-direction: row;
			gap: 0.75rem;
			align-items: center;
			justify-content: center;
		}
		
		.countdown-text {
			display: none;
		}
		
		.countdown-timer {
			justify-content: center;
			gap: 0.25rem;
		}
		
		.countdown-unit {
			min-width: 2rem;
		}
		
		.countdown-number {
			font-size: 1.1rem;
		}
		
		.countdown-label {
			font-size: 0.7rem;
		}
		
		.countdown-separator {
			font-size: 1.1rem;
			margin: 0 0.1rem;
		}
		
		.countdown-button {
			padding: 0.5rem 0.75rem;
			font-size: 0.8rem;
		}
	}
</style>