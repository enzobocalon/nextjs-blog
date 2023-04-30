/* eslint-disable @typescript-eslint/no-extra-semi */
/* eslint-disable semi */

export default interface IUser {
  id: string
  email: string;
  name: string;
  role: 'USER' | 'ADMIN' | 'AUTHOR';
  password: string;
  emailVerified: boolean;
};
