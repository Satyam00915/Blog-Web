import { Input } from "../ui/input";
import { Button } from "../ui/button";
import toast, { Toaster } from "react-hot-toast";
import { passwordChangeSchema } from "@/Schema/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

const Password = () => {
  const form = useForm<z.infer<typeof passwordChangeSchema>>({
    resolver: zodResolver(passwordChangeSchema),
    defaultValues: {
      oldpassword: "",
      newpassword: "",
      retypeNewPassword: "",
    },
  });

  function onSubmit(data: z.infer<typeof passwordChangeSchema>) {
    console.log(data);
    toast.success("Password Updated!");
  }
  return (
    <div className="px-16">
      <Toaster />
      <div className="space-y-3 py-5">
        <div className="text-lg font-semibold dark:text-white text-black">
          Password
        </div>
        <p className="text-gray-500 text-sm">Change your Password</p>
        <div className="divider divider-neutral dark:divider-neutral"></div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="oldpassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-white text-black">
                  Old Password
                </FormLabel>
                <FormControl>
                  <Input
                    className="w-3/5"
                    placeholder="Old password ..."
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-sm">
                  Type your old password
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="newpassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-white text-black">
                  New Password
                </FormLabel>
                <FormControl>
                  <Input
                    className="w-3/5"
                    placeholder="New password ..."
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-sm">
                  Type your New password
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="retypeNewPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-white text-black">
                  Retype New Password
                </FormLabel>
                <FormControl>
                  <Input
                    className="w-3/5"
                    placeholder="Old password ..."
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-sm">
                  ReType your New password
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Update Password</Button>
        </form>
      </Form>
    </div>
  );
};

export default Password;
