import { get } from "./ajax";
import type { Post } from "./types/Post";
import type { User } from "./types/User";
import { signal } from '../components/Layout';

export const getPostDetails = (id: string) => get(`posts/${id}?_expand=user`);

export const getUserById = (id: string) => get(`users/${id}`);

export const getPhotos = (page: number, limit: number) => get(`photos?_page=${page}&_limit=${limit}`);

export const getUserByName = (q: string): Promise<User[]> => {
    const query = q ? `?name_like=${q}` : '';
    return get(`users${query}`, { signal });
};

export const getPostsByUserIds = (userIds: number[]): Promise<Post[]> => {
    const query = userIds.length ? `?_embed=comments&${userIds.map(id => `userId=${id}`).join('&')}` : '?_embed=comments';
    return get(`posts${query}`)
};