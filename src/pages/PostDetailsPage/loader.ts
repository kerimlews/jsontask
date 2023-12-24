import type { LoaderFunctionArgs } from "react-router-dom";
import { getPostDetails, getUserById } from "../../misc/api";
import { notFoundResponse } from "../../misc/errors";

export const loader = async ({ params }: LoaderFunctionArgs) => {
    if (!params.id) return notFoundResponse();
    const post = await getPostDetails(params.id);
    if (!post) notFoundResponse();
    return post
}