import type { Comment } from "./Comment";
import type { User } from "./User";

export type Post = {
    id: number;  
    userId: number;
    comments: Comment[];
    title: string;
    body: string;
    user: User;
}