// usePostSearch.tsx
import { useEffect, useState } from "react";
import axiosInstance from "./axios";
import { PostType } from "../types/PostTypes";

interface PostSearchProps {
  pageNumber: number | null;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const usePostSearch = (props: PostSearchProps) => {
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState<PostType[] | null>([]);
  const [hasMore, setHasMore] = useState(false);

  const LIMIT = 5;

  useEffect(() => {
    console.log("Page number: " + props.pageNumber);
    if (posts === null || props.pageNumber === 1) {
      console.log("Loading screen");
      props.setIsLoading(true);
    }
    const fetchData = async () => {
      setError(false);

      try {
        const response = await axiosInstance.get(
          `/posts?_expand=user&_limit=${LIMIT}&_page=${props.pageNumber}`,
        );
        setHasMore(
          response.headers["x-total-count"] >=
            posts?.length + response.data.length,
        );

        setPosts((prevPosts) => {
          const newPosts = response.data.filter((newPost: { id: number }) => {
            return !prevPosts?.some((prevPost) => prevPost.id === newPost.id);
          });

          return prevPosts ? [...prevPosts, ...newPosts] : newPosts;
        });
      } catch (err) {
        console.log(err);
        setError(true);
        props.setIsLoading(false);
      } finally {
        // if (posts === null) {
        //   console.log("Removing loading indicator");
        props.setIsLoading(false);
        // }
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.pageNumber]);

  return { error, posts, setPosts, hasMore };
};

export default usePostSearch;
