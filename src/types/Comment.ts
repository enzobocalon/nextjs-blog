/* eslint-disable @typescript-eslint/no-extra-semi */
/* eslint-disable semi */

import IPost from './Post';
import IUser from './User';

export default interface IComment{
  id: string;
  author: IUser;
  content: string;
  authorId: string;
  post: IPost;
  postId: string;
  createdAt: string
}
