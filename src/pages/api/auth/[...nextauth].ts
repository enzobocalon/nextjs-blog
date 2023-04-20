import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import prisma from '@/lib/prisma';

const options: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	session: {
		strategy: 'jwt',
		maxAge: 60 * 60 * 24 // 1 day
	},
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: {label: 'Email'},
				password: {label: 'Password'}
			},
			async authorize(credentials) {
				// login verification
				return {
					id: 'temporary'
				};
			}
		})
	],
	secret: process.env.JWT_SECRET,
	callbacks: {
		async jwt({ token, user}) {
			return {
				...user, ...token,
			};
		},
		async session({session, user, token}) {
			return {
				...session,
				...token,
				...user
			};
		}
	}
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
