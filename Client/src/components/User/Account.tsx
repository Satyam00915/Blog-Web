import { accountSchema } from "@/Schema/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import toast, { Toaster } from "react-hot-toast";

const Account = () => {
  const form = useForm<z.infer<typeof accountSchema>>({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      image: "",
      Name: "",
      DateofBirth: new Date(),
    },
  });

  function onSubmit(values: z.infer<typeof accountSchema>) {
    console.log(values);
    toast.success("Updated Successfully!");
  }
  return (
    <div className="h-full px-16">
      <Toaster />
      <div className="dark:text-white text-xl font-semibold text-black">
        Account
      </div>
      <p className="text-sm">Update your account settings.</p>
      <div className="divider divider-end"></div>
      <div>
        <div className="flex items-center justify-around gap-5">
          <div className="rounded-full overflow-hidden border p-5 border-slate-500 h-[250px] w-[250px]">
            <img
              width={300}
              height={300}
              src="https://imgs.search.brave.com/5-rEUEEPDo2sYj457aKC8Gv7GqejxlnlrVFxhj9FU5I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zYWZl/aW1hZ2VraXQuY29t/L2Fzc2V0cy9pbWFn/ZXMva2FydW5hLndl/YnA"
              alt=""
            />
          </div>
        </div>
        <div className="divider divider-end"></div>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2 justify-start">
                    <FormLabel className="font-semibold text-lg text-black dark:text-white">
                      Select Image To change
                    </FormLabel>
                    <FormControl>
                      <input
                        type="file"
                        className="file-input file-input-bordered w-full max-w-xs"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Name"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2 justify-start">
                    <FormLabel className="font-semibold text-lg text-black dark:text-white">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Name..." {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="DateofBirth"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2 justify-start">
                    <FormLabel className="font-semibold text-lg text-black dark:text-white">
                      Date of Birth
                    </FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[280px] justify-start text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon />
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormDescription>
                      This is your Date of Birth.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="bg-black" type="submit">
                Update Details
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Account;
