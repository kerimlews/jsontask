import { memo } from "react";
import type { Comment } from "../../misc/types/Comment";

const CommentCard = ({ name, email, body }: Comment) => {
  return (
    <li>
      <h4>{name}</h4> - <i>{email}</i>
      <p>{body}</p>
    </li>
  )
}

export default memo(CommentCard);
