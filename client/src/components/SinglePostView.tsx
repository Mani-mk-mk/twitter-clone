import { PostType } from "../types/PostTypes";
import RenderImage from "./RenderImage";
import Stats from "./Stats";

interface SinglePostViewProps {
  post: PostType;
}

const SinglePostView = (props: SinglePostViewProps) => {
  return (
    <div className="p-4 pt-0 text-white">
      {props.post.tweet && (
        <div className="text-md py-2 font-roboto font-medium">
          {props.post.tweet}
        </div>
      )}
      {props.post.images && (
        <div className="h-full w-full rounded-md">
          <RenderImage images={props.post.images} />
        </div>
      )}
      <div
        className="py-2 font-bold text-unhighlighted-color hover:underline"
        id="timing"
      >
        220K Views
      </div>
      <div className="border-y border-borderColor py-2">
        <Stats {...props.post} />
      </div>
    </div>
  );
};

export default SinglePostView;
