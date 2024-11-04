import { z } from "zod";

export const profileSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be of minimum 3 characters." }),
  email: z.string().email().min(1, { message: "Email is required." }),
  bio: z.string().min(1, { message: "Bio is required." }),
  URLs: z.string().min(1, { message: "At least one URL is required." }),
});
