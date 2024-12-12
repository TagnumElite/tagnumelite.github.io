import type { Post } from '$lib/types';

export async function load() {
	const allPostFiles = import.meta.glob('$lib/posts/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const posts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = (await resolver()) as { metadata: Post };
			const slug = path.slice(15, -3);

			return {
				metadata,
				slug
			};
		})
	);

	return { posts };
}
