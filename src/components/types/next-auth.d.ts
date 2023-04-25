import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    id: string;
    name: string;
    role: 'USER' | 'AUTHOR' | 'ADMIN';
    
  }
}
