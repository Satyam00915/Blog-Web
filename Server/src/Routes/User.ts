import { Hono } from "hono";

const User = new Hono();

User.get("/", (c) => {
  return c.text("Hello from User Route");
});

export default User;
