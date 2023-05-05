import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
const secret = process.env.JWT_SECRET;

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
	const token = await getToken({ req, secret });

	if (!token) {
		res.status(401).json({
			message: 'Unauthorized access'
		});
		return;
	}

	const { content } = req.body;
	const { id } = req.query;

	if (!id) return;

	if (!content) {
		res.status(422).json({
			message: 'Content is required'
		});
		return;
	}

	const user = await prisma.user.findUnique({
		where: {
			id: token.id as string
		},
		select: {
			id: true,
		}
	});

	if (!user) {
		res.status(401).json({
			message: 'Unauthorized access'
		});
		return;
	}

	const comment = await prisma.comment.create({
		data: {
			content,
			postId: id as string,
			authorId: user.id
		}
	});

	if (!comment) {
		res.status(500).json({
			message: 'Failed to create post'
		});
		return;
	}

	res.status(201).json({
		message: 'Comment created successfully'
	});
	return;

}
