import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
const secret = process.env.JWT_SECRET;

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
	const token = await getToken({ req, secret });

	const { id } = req.query;

	if (!id) return;

	if (!token) {
		res.status(401).json({
			message: 'Unauthorized access'
		});
		return;
	}

	const user = await prisma.user.findUnique({
		where: {
			id: token.id as string
		},
		select: {
			id: true,
			role: true
		}
	});

	if (!user) {
		res.status(401).json({
			message: 'Unauthorized access'
		});
		return;
	}

	const comment = await prisma.comment.findUnique({
		where: {
			id: id as string
		},
		include: {
			post: {
				select: {
					authorId: true
				}
			}
		}

	});

	if (!comment) {
		res.status(404).json({
			message: 'Comment not found'
		});
		return;
	}

	if (comment.authorId !== user.id && comment.post.authorId !== user.id && user.role !== 'ADMIN') {
		res.status(401).json({
			message: 'Unauthorized access'
		});
		return;
	}

	const deletedComment = await prisma.comment.delete({
		where: {
			id: id as string
		}
	});

	if (!deletedComment) {
		res.status(500).json({
			message: 'Failed to delete comment'
		});
		return;
	}

	res.status(201).json({
		message: 'Comment deleted successfully'
	});
	return;
}
