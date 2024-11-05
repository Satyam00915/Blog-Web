import toast, { Toaster } from "react-hot-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";

interface cardProps {
  author: String;
  createdAt: String;
  title: String;
  description: String;
  tag: String;
}

const SavedBlogCard = ({
  author,
  createdAt,
  title,
  description,
  tag,
}: cardProps) => {
  return (
    <div className="card bg-base-100 w-80 shadow-xl">
      <Toaster />
      <figure className="h-36">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Blog thumbnail"
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-2 mb-2">
          <div className="avatar">
            <div className="w-8 rounded-full text-white font-semibold text-lg px-3 py-1">
              {author.split("")[0]}
            </div>
          </div>
          <span className="text-sm font-medium">{author}</span>
          <span className="text-sm text-gray-500">• {createdAt}</span>
        </div>

        <h2 className="card-title">
          {title}
          <div className="badge badge-primary">{tag}</div>
        </h2>
        <p className="text-gray-600 line-clamp-2">{description}</p>
        <div className="card-actions justify-between items-center mt-4">
          <div className="text-sm text-gray-500">
            {(Math.random() * 10 + 1).toFixed(0)} min read
          </div>
          <div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="outline"
                  className="text-black font-semibold dark:text-white"
                >
                  Unsave
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => {
                      toast.success("Blog Removed!");
                    }}
                  >
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedBlogCard;
