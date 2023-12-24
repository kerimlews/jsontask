import type { LoaderFunctionArgs } from "react-router-dom";
import { getPostsByUserIds, getUserByName } from "../../misc/api";

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const url = new URL(request.url);
    const q = url.searchParams.get('q') || '';
    const users = await getUserByName(q);
    const posts = users.length ? await getPostsByUserIds(users.map(u => u.id)) : [];
    return posts.map(p => ({
        ...p,
        user: users.find(u => u.id === p.userId)
    }));
}