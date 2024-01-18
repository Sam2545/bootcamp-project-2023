//import { couldStartTrivia } from "typescript";

type Blog = {
	title: string;
	date: string;
	description: string;
    slug: string;
};

const blog_posts: Blog[] = [
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

const posts = document.getElementById("blog-posts");
console.log(posts)

blog_posts.forEach((blog) => {
    const post = document.createElement("div");
    const blog_slug = document.createElement("a");

    post.innerHTML = `
            <h2 class="post-title">${blog.title}</h2>
            <h3 class="post-date">${blog.date}</h3>
            <p class="post-description">${blog.description}</p>
        `;
    blog_slug.href = blog.slug;
    post.classList.add("post-preview");
    blog_slug.innerHTML = "Click here to read more";
    post.appendChild(blog_slug);

    posts?.appendChild(post);

});