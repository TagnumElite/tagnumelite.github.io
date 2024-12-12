<script lang="ts">
	export let data;
	const { posts } = data;
</script>

<div>
	<article>
		{#each posts as post}
			<p>Slug: {post.slug}</p>
			<p>Title: {post.metadata.title}</p>
			<p>Description: {post.metadata.description}</p>
			<p>Date: {post.metadata.date}</p>
			<p>Categories: {post.metadata.categories}</p>
			<p>Published: {post.metadata.published}</p>
		{/each}
	</article>
</div>
