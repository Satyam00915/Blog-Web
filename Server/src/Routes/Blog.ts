import { Hono } from "hono";

const Blog = new Hono();

Blog.get("/", (c) => {
  return c.text("Hello from blog Route!");
});

export default Blog;
