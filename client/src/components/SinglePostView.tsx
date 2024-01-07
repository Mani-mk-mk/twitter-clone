import { useState } from "react";
import { PostType } from "../types/PostTypes";
import Comment from "./Comment";
import DisplayComments from "./DisplayComments";
import RenderImage from "./RenderImage";
import Stats from "./Stats";

interface SinglePostViewProps {
  post: PostType;
  showAlerts: boolean;
  setShowAlerts: React.Dispatch<React.SetStateAction<boolean>>;
  alertMessage: string;
  setAlertMessage: React.Dispatch<React.SetStateAction<string>>;
}

const SinglePostView = (props: SinglePostViewProps) => {
  const [comments, setComments] = useState<PostType[] | null>(null);

  return (
    <div>
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
      <div>
        <Comment
          comments={comments}
          setComments={setComments}
          showAlerts={props.showAlerts}
          setShowAlerts={props.setShowAlerts}
          alertMessage={props.alertMessage}
          setAlertMessage={props.setAlertMessage}
          postId={props.post.id}
        />
      </div>
      <div>
        <DisplayComments
          comments={comments}
          setComments={setComments}
          postId={props.post.id}
        />
      </div>
    </div>
  );
};

export default SinglePostView;
