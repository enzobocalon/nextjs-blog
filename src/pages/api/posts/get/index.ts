import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const PAGE_SIZE = 10;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { page } = req.query;

	const pageNumber = parseInt(page as string);

	const currentPage = (pageNumber - 1) * PAGE_SIZE;

	if (Number.isNaN(currentPage)) {
		res.status(400).json({
			message: 'Invalid page'
		});
		return;
	}

	const count = await prisma.post.count();
	const posts = await prisma.post.findMany({
		skip: currentPage,
		take: PAGE_SIZE,
		include: {
			author: {
				select: {
					id: true,
					name: true
				}
			}
		},
		orderBy: {
			createdAt: 'desc'
		}
	});

	if (!posts) {
		res.status(404).json({
			message: 'Posts not found'
		});
		return;
	}

	res.status(200).json({
		posts,
		count
	});
	return;

}
