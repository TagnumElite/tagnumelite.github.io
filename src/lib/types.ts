export type Categories = 'general' | 'modding' | 'gaming';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	published: boolean;
	categories: Categories[];
};
