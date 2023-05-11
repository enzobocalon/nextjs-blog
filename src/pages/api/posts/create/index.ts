import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
const secret = process.env.JWT_SECRET;

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
	const token = await getToken({ req, secret });
	console.log('token', token);

	if (!token) {
		res.status(401).json({
			message: 'Unauthorized access'
		});
		return;
	}

	const {
		title,
		banner,
		allowComments,
		content,
	} = req.body;


	if (!title || !content) {
		res.status(422).json({
			message: 'Post title and/or content is required'
		});
		return;
	}

	const user = await prisma.user.findUnique({
		where: {
			id: token.id as string
		},
		select: {
			id: true,
			email: true,
			name: true,
			role: true
		}
	});

	console.log('user', user);

	if (!user) {
		res.status(401).json({
			message: 'Unauthorized access'
		});
		return;
	}

	if (!['AUTHOR', 'ADMIN'].includes(user.role)) {
		res.status(401).json({
			message: 'Unauthorized access'
		});
		return;
	}

	const createdPost = await prisma.post.create({
		data: {
			title,
			content,
			allowComments,
			banner: banner || null,
			authorId: user.id
		}
	});

	if (!createdPost) {
		res.status(500).json({
			message: 'Failed to create post'
		});
		return;
	}

	res.status(201).json({
		message: 'Post created successfully'
	});
	return;
}
