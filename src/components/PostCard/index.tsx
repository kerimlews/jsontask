import React, { memo, useState } from 'react'
import CommentCard from '../CommentCard';
import type { Post } from '../../misc/types/Post';
import { Link } from 'react-router-dom';

const PostCard = ({ id, title, user, comments }: Pick<Post, 'id' | 'title' | 'user' | 'comments'>) => {
  const [expand, setExpand] = useState(false);

  const toggleExpand: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    e.stopPropagation();
    setExpand(!expand);
  };
  
  return (
    <li>
        <Link to={`/posts/${id}`}>{title}</Link> - <i>{user?.name}</i>
          <button onClick={toggleExpand} disabled={!comments.length}>{
            !comments.length ? 'No comments' : !expand ? 'Expand' : 'Hide'}
          </button>
          {expand ? (
            <ul>
              {comments.map(comment => <CommentCard key={comment.id} {...comment} />)}
            </ul>
          ) : null}
    </li>
  )
}

export default memo(PostCard)
