//NOT BEING USED BECAUSE OF SHADCN FORM MANAGEMENT

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { toast } from "sonner";

const ProfBox = () => {
  return (
    <>
      <div className="px-16 space-y-4">
        <div className="text-white text-xl font-semibold">Profile</div>
        <div className="text-sm">
          This is how others will see you on the site.
        </div>
        <div className="divider divider-end"></div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="username"
              className="text-md text-white font-semibold"
            >
              Username
            </Label>
            <Input placeholder="Satyam" className="w-2/3" />
            <p className="text-sm text-gray-500 w-2/3">
              This is your public display name. It can be your real name or a
              pseudonym. You can only change this once every 30 days.
            </p>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="username"
              className="text-md text-white font-semibold"
            >
              Email
            </Label>
            <Input placeholder="satyam@gmail.com" className="w-2/3" />
            <p className="text-sm text-gray-500 w-2/3">
              You can manage verified email addresses in your email settings.
            </p>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="username"
              className="text-md text-white font-semibold"
            >
              Bio
            </Label>
            <Textarea placeholder="I own a computer." className="w-2/3" />
            <p className="text-sm text-gray-500 w-2/3">
              You can @mention other users and organizations to link to them.
            </p>
          </div>

          <div className="space-y-3">
            <Label
              htmlFor="username"
              className="text-md text-white font-semibold"
            >
              URLs
            </Label>
            <Input placeholder="https://satyam.com" className="w-2/3" />
            <Input placeholder="https://satyam.com/blog" className="w-2/3" />
            <Button variant={"outline"}>Add Url</Button>
          </div>
        </div>
        <Button
          onClick={() => {
            toast("Preferences Updated!", {
              description: "Your personal info has been updated!",
              action: {
                label: "Close",
                onClick: () => {
                  toast.dismiss();
                },
              },
            });
          }}
        >
          Update Preferences
        </Button>
      </div>
    </>
  );
};

export default ProfBox;
