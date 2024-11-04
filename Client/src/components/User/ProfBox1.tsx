//NOT BEING USED BECAUSE OF SHADCN FORM MANAGEMENT

import { profileSchema } from "@/Schema/zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const ProfBox1 = () => {
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      username: "",
      email: "",
      bio: "",
      URLs: "",
    },
  });

  function onSubmit(values: z.infer<typeof profileSchema>) {
    console.log(values);
  }
  return (
    <div className="px-16 text-black dark:text-white">
      <div className="text-black dark:text-white text-xl font-semibold">
        Profile
      </div>
      <div className="text-sm">
        This is how others will see you on the site.
      </div>
      <div className="divider divider-end"></div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name. It can be your real name or
                  a pseudonym. You can only change this once every 30 days.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="satyam@gmail.com" {...field} />
                </FormControl>
                <FormDescription>Enter Your Email address</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea placeholder="I am a web developer" {...field} />
                </FormControl>
                <FormDescription>Enter Your Email address</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="URLs"
            render={({ field }) => (
              <FormItem>
                <FormLabel>URLs</FormLabel>
                <FormControl>
                  <Input placeholder="https://satyam.com" {...field} />
                </FormControl>
                <FormDescription>Enter Your Email address</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default ProfBox1;
