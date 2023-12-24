import { useLoaderData } from 'react-router-dom';
import type { Post } from '../../misc/types/Post';

const PostDetailsPage = () => {
  const post = useLoaderData() as Post;

  return (
      post && (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
      )
  )
}

export default PostDetailsPage;
