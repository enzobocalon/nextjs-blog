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

	const {
		title,
		banner,
		allowComments,
		content,
	} = req.body;
  
	const { id } = req.query;

	if (!id) return;

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

	if (!user) {
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

	const updatedPost = await prisma.post.update({
		where: {
			id: id as string,
		},
		data: {
			title,
			content,
			allowComments,
			banner: banner || null,
		}
	});

	if (!updatedPost) {
		res.status(500).json({
			message: 'Failed to update post'
		});
		return;
	}

	res.status(201).json({
		post: updatedPost,
		message: 'Post updated successfully'
	});
	return;
}
