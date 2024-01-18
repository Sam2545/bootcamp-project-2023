//import { couldStartTrivia } from "typescript";
var blog_posts = [
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
var posts = document.getElementById("blog-posts");
console.log(posts);
blog_posts.forEach(function (blog) {
    var post = document.createElement("div");
    var blog_slug = document.createElement("a");
    post.innerHTML = "\n            <h2 class=\"post-title\">".concat(blog.title, "</h2>\n            <h3 class=\"post-date\">").concat(blog.date, "</h3>\n            <p class=\"post-description\">").concat(blog.description, "</p>\n        ");
    blog_slug.href = blog.slug;
    post.classList.add("post-preview");
    blog_slug.innerHTML = "Click here to read more";
    post.appendChild(blog_slug);
    posts === null || posts === void 0 ? void 0 : posts.appendChild(post);
});
