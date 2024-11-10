import { Hono } from "hono";
import { cors } from "hono/cors";
import UserRouter from "./Routes/User";
import BlogRouter from "./Routes/Blog";

const app = new Hono().basePath("/api/v1");

app.use(cors());
app.route("/user", UserRouter);
app.route("/blog", BlogRouter);

export default app;
