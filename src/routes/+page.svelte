<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import EventCard from '$lib/components/EventCard.svelte';
	import { events } from '$lib/data/events';
</script>

<SEO
	title="Prisma Academy – Empowering Future Generations"
	description="Prisma Academy helps youth grow through education, integration, and career development in Canada."
	keywords="Prisma Academy, youth programs, career development, education, Canada"
	url="https://prismaacademy.org"
/>

<section class="section home-1-banner">
	<div class="w-layout-blockcontainer base-container w-container">
		<div class="w-layout-grid banner-home-1-content-wraper">
			<div class="content-home-1-banner">
				<h1 data-w-id="f9fc3fc8-00a7-e36d-9ae0-d1af0a10abc3" class="light-text">
					<span class="yellow-text">Building Bridges for</span> a Brighter Future
				</h1>
				<p data-w-id="c0ecdc93-e356-650c-3e4f-a5d157c4c8a6" class="paragraph-home-1-banner">
					Through mentorship and transformative education, we nurture future leaders who aspire to
					serve humanity with wisdom, compassion, and integrity.
				</p>
				<div data-w-id="5a08c71c-353e-aca7-ce8f-8ba5a46fa4a4" class="buttons-banner-wrapper">
					<a href="/about-us" class="secondary-button"
						>About Us<span class="button-arrow primary-color-text"></span></a
					>
					<a
						data-w-id="b6735336-490a-9739-39d2-9fa57c84e1d0"
						href="/donate"
						class="primary-big-button">Donate<span class="arrow-button"></span></a
					>
				</div>
				<div data-w-id="36a4c060-e925-57ed-befb-4b4ec409b934" class="info-clients-home-1-wrapper">
					<img src="images/Clients-Images.png" loading="lazy" alt="" />
					<div class="small-text-info-wrapper">
						<div class="yellow-text">1000+ mentorship sessions</div>
						<div class="light-text">that supported students and new grads</div>
					</div>
				</div>
			</div>
			<img
				class="home-1-image"
				src="images/prisma-hero-01.jpg"
				alt=""
				sizes="(max-width: 1439px) 100vw, 1330px"
				data-w-id="56354973-705a-ad34-bf0d-9b8463fc3e69"
				loading="lazy"
				srcset="images/prisma-hero-01-p-500.jpg 500w, images/prisma-hero-01.jpg 660w"
			/>
		</div>
	</div>
	<img src="images/Vector.svg" loading="lazy" alt="" class="background-1-home-1" /><img
		src="images/Vector-2.svg"
		loading="lazy"
		alt=""
		class="background-2-home-1"
	/>
</section>
<section class="section">
	<div class="w-layout-blockcontainer base-container w-container">
		<div class="w-layout-grid commitment-home-3-type">
			<div id="w-node-f75e99dc-640d-9519-f558-60db2bc1f28b-e9c2db29" class="title-commitment">
				<div data-w-id="f75e99dc-640d-9519-f558-60db2bc1f28c" class="title-text">
					<span class="left">/</span>Our commitment to<span class="right">/</span>
				</div>
				<h2 data-w-id="f75e99dc-640d-9519-f558-60db2bc1f292">
					We are deeply committed to serving our communities with unwavering dedication and
					integrity.
				</h2>
			</div>
			<div data-w-id="f75e99dc-640d-9519-f558-60db2bc1f294" class="commitment-content">
				<img src="images/Arrow-Yellow.png" loading="lazy" alt="" class="commitment-icon" />
				<div>
					<div class="big-title-commitment dark-color-text">Skills Development</div>
					<p class="paragraph-4">
						We are dedicated to promoting physical and mental well-being by providing essential
						health resources and support to those in need.
					</p>
				</div>
			</div>
			<div data-w-id="f75e99dc-640d-9519-f558-60db2bc1f29b" class="commitment-content">
				<img src="images/Arrow-Yellow.png" loading="lazy" alt="" class="commitment-icon" />
				<div class="big-title-commitment dark-color-text">Mentorship</div>
				<p class="paragraph-4">
					We are dedicated to promoting physical and mental well-being by providing essential health
					resources and support to those in need.
				</p>
			</div>
			<div data-w-id="f75e99dc-640d-9519-f558-60db2bc1f2a1" class="commitment-content">
				<img src="images/Arrow-Yellow.png" loading="lazy" alt="" class="commitment-icon" />
				<div class="big-title-commitment dark-color-text">Unity Gatherings</div>
				<p class="paragraph-4">
					We are dedicated to promoting physical and mental well-being by providing essential health
					resources and support to those in need.
				</p>
			</div>
		</div>
	</div>
</section>
<section class="section primary-dark-background">
	<div class="w-layout-blockcontainer base-container w-container">
		<div
			data-w-id="166ea4eb-be94-fdfd-520c-af67d0cfdb6b"
			class="w-layout-grid about-center-wrapper"
		>
			<div class="images-content-about-us-wrappper">
				<img
					src="images/Ellipse-1.svg"
					loading="lazy"
					style="-webkit-transform:translate3d(200px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(200px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(200px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(200px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
					alt=""
					class="big-circle"
				/><img
					src="images/Ellipse-2.svg"
					loading="lazy"
					style="-webkit-transform:translate3d(-200px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(-200px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(-200px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(-200px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0"
					alt=""
					class="small-circle"
				/><img
					src="images/prisma-icon.svg"
					loading="lazy"
					style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-180deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-180deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-180deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-180deg) skew(0, 0)"
					alt=""
					class="logo-image"
				/>
				<div
					data-w-id="1697d629-4220-ac64-c76c-2683b0f7007b"
					class="info-text-absolute left-center"
				>
					Growth-Oriented
				</div>
				<div data-w-id="4143d339-8442-3d96-0bfd-a5139a2d2009" class="info-text-absolute left-top">
					Mentorship-Driven
				</div>
				<div data-w-id="fec5fe27-8dd4-b8e9-1874-25aa6af4a5bf" class="info-text-absolute">
					Community-driven
				</div>
				<div
					data-w-id="95a52687-186e-e6cb-c0b6-1a6c0d48411f"
					class="info-text-absolute right-bottom"
				>
					Inclusive
				</div>
				<div
					data-w-id="12c7d39b-a3a8-65c8-29c3-7765a19a9284"
					class="info-text-absolute left-bottom"
				>
					Impactful
				</div>
				<div data-w-id="38e13813-27eb-9b4f-4a2e-39675e8ebf0a" class="info-text-absolute right-top">
					Education-Focused
				</div>
			</div>
			<div class="content-about-center-wrapper">
				<div data-w-id="7ae1fad9-a006-2e78-5632-fe03384c0f17" class="title-text yellow-text">
					<span class="left">/</span>About our center<span class="right">/</span>
				</div>
				<h2 data-w-id="8707e812-20be-a3ea-f942-84ba0a4d115e" class="light-text margin-top---30px">
					We believe in the power of education and the connections we create to shape the leaders of
					tomorrow.
				</h2>
				<p data-w-id="eb26bb99-a3e9-975f-0b41-00888692d26f" class="paragraph-large light-text">
					Whether you&#x27;re looking to mentor, learn, or grow, your involvement with Prisma
					Academy helps build a thriving community of empowered, inspired, and skilled individuals.
				</p>
				<div data-w-id="f5577f0c-0640-546a-f3e1-a0af77541fcb" class="small-info-center-wrapper">
					<div class="yellow-text">10,000+ hours volunteered</div>
					<div class="light-text">by our compassionate community</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="section">
	<h1 class="heading-5">Recent and Upcoming Events</h1>
	<div class="w-layout-blockcontainer base-container w-container">
		<ul role="list" class="list">
			{#each events.slice(0, 3) as event}
				<EventCard
					date={event.date}
					title={event.title}
					description={event.description}
					imageUrl={event.imageUrl}
					imageAlt={event.imageAlt}
					learnMoreUrl={event.learnMoreUrl}
				/>
			{/each}
		</ul>
	</div>
</section>
