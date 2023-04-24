import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import prisma from '@/lib/prisma';
import { verifyPassword } from '@/lib/hashPassword';

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
				if (!credentials) {
					return null;
				}

				if (!credentials.email || !credentials.password) {
					throw new Error('Please provide the required data');
				}

				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email
					}
				});

				if (!user) throw new Error('No user found');

				const isPasswordCorrect = await verifyPassword(credentials.password, user.password);

				if (!isPasswordCorrect) throw new Error('No user found');

				return {
					id: user.id,
					email: user.email,
					name: user.name,
					role: user.role,
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
