import { useQuery } from "react-query";
import { getPosts } from "../client/getPosts";
import { reactQueryConfiguration } from "../data/reactQueryConfiguration";

export const usePosts = (url) => {
    const postsQuery = useQuery(
        ["post", url],
        () => getPosts(url),
        reactQueryConfiguration,
        {
            enabled: !!url,
        }
    );

    return {
        data: postsQuery.data,
        isLoading: postsQuery.isLoading,
        error: postsQuery.error,
    };
};
