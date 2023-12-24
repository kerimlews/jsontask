import type { LoaderFunctionArgs } from "react-router-dom";
import { getPhotos } from "../../misc/api";
import { notFoundResponse } from "../../misc/errors";

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const url = new URL(request.url);
    const page = url.searchParams.get('_page') || '0';
    const limit = url.searchParams.get('_limit') || '10';

    const photos = await getPhotos(parseInt(page), parseInt(limit));
    if (!photos.length) notFoundResponse();
    return photos;
}