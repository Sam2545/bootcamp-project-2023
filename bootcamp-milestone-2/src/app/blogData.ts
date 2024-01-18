import { getDefaultAutoSelectFamilyAttemptTimeout } from "net";

export interface Blog {
	title: string;
	date: string;
	description: string;
    slug: string;
};

const blogs: Blog[] = [
	{
		title: "My top 10 favorite TV shows",
        date: "October 22, 2023",
        description: "This is a personal list of my favorite tv shows! I rate them based off of gore, entertainment, action, and emotion",
        slug: "./blog_1.html",
	},
	{
		title: "My new car!",
        date: "August 16, 2022",
        description: "The story of how I got my first car",
        slug: "./blog_2.html",
	},
];

export default blogs;