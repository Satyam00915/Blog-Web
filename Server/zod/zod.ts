import { z } from "zod";

export const UserSchema = z.lazy(() =>
  z.object({
    fullName: z.string().min(1),
    email: z.string().email(),
    profilePic: z.string().optional(),
    url: z.string().optional(),
    age: z.number().optional(),
    bio: z.string().optional(),
    password: z.string().optional(),
    googleId: z.string().optional(),
    createdAt: z.date().optional(),
    blogCreated: z.array(BlogSchema).optional(),
    blogsSaved: z.array(BlogSchema).optional(),
  })
);

export const CommentSchema = z.object({
  content: z.string().min(1),
  createdAt: z.date().optional(),
});

export const BlogSchema = z.lazy(() =>
  z.object({
    title: z.string().min(1),
    content: z.string().min(1),
    createdAt: z.date().optional(),
    author: UserSchema,
    savedBy: z.array(UserSchema).optional(),
    comments: z.array(CommentSchema).optional(),
  })
);
