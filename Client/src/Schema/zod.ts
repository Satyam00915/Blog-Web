import { z } from "zod";

export const profileSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be of minimum 3 characters." }),
  email: z.string().email().min(1, { message: "Email is required." }),
  bio: z.string().min(1, { message: "Bio is required." }),
  URLs: z.string().min(1, { message: "At least one URL is required." }),
});

export const passwordChangeSchema = z.object({
  oldpassword: z
    .string()
    .min(3, { message: "You must provide the Old Password" }),
  newpassword: z
    .string()
    .min(5, { message: "New Password must be of minimum 5 characters." }),
  retypeNewPassword: z.string().min(5, {
    message: "Retype New Password must be of minimum 5 characters.",
  }),
});

export const accountSchema = z.object({
  image: z.string().refine((name) => /\.(jpg|jpeg|png|gif|webp)$/i.test(name), {
    message: "File must be a valid image format (jpg, jpeg, png, gif, webp)",
  }),
  Name: z.string().min(3, { message: "Name is needed" }),
  DateofBirth: z.date(),
});
