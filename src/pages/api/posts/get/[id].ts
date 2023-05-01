import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { id } = req.query;

	if (!id) return;

	const post = await prisma.post.findUnique({
		where: {
			id: id as string,
		},
		include: {
			author: {
				select: {
					id: true,
					name: true,
				}
			}
		}
	});


	if (!post) {
		res.status(404).json({
			message: 'Post not found'
		});
		return;
	}

	res.status(200).json(post);
	return;
}
