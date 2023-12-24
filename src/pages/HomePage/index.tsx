import { Outlet, useLoaderData } from 'react-router-dom';
import type { Post } from '../../misc/types/Post';
import PostCard from '../../components/PostCard';

import './style.scss';

const HomePage = () => {  
  const posts = useLoaderData() as Post[];
  
  return (
    <div className='homepage'>
      <ul>
        {posts.map(post => <PostCard key={post.id} {...post} />)}
        {!posts.length && <span>No posts found</span>}
      </ul>
      <Outlet />
    </div>
  )
}

export default HomePage;
