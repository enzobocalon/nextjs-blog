import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
const secret = process.env.JWT_SECRET;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'DELETE') {
		res.json({message: 'Invalid method'});
	}


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
			email: true,
			name: true,
			role: true
		}
	});

	if (!user || !['ADMIN', 'AUTHOR'].includes(user.role)) {
		res.status(401).json({
			message: 'Unauthorized access'
		});
		return;
	}

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

	if (post.authorId !== user.id && user.role !== 'ADMIN') {
		res.status(401).json({
			message: 'Unauthorized access'
		});
		return;
	}

	const deletedPost = await prisma.post.delete({
		where: {
			id: id as string
		}
	});

	if (!deletedPost) {
		res.status(500).json({
			message: 'Failed to delete post'
		});
		return;
	}

	res.status(201).json({
		message: 'Post deleted successfully'
	});
	return;
}
