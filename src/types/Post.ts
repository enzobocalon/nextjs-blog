/* eslint-disable @typescript-eslint/no-extra-semi */
/* eslint-disable semi */

import IUser from './User';

export default interface IPost {
  id: string
  title: string
  content: string
  banner?: string
  createdAt: string;
  updatedAt: string;
  author: IUser;
};
