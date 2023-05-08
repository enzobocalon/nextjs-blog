import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { id } = req.query;

	if (!id) return;

	const post = await prisma.post.findUnique({
		where: {
			id: id as string,
		}
	});

	if (!post) {
		res.status(404).json({
			message: 'Post not found'
		});
		return;
	}

	const comments = await prisma.comment.findMany({
		where: {
			postId: id as string,
		},
		select: {
			id: true,
			author: true,
			content: true,
			createdAt: true
		}
	});

	res.status(200).json(comments);
	return;
}
