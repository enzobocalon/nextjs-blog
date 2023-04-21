import isEmailValid from '@/utils/isEmailValid';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { hashPassword } from '@/lib/hashPassword';

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'POST') return;

	const { name, email, password } = req.body;
	if (!name || !email || !password) {
		return;
	}

	if (!isEmailValid(email)) {
		res.status(422).json({
			message: 'Invalid email'
		});
		return;
	}

	if (password.length < 5) {
		res.status(422).json({
			message: 'Your password must be at least 5 characters long.'
		});
		return;
	}

	const hashedPassword = await hashPassword(password);

	const emailAlreadyExists = await prisma.user.findUnique({
		where: {
			email,
		},
		select: {
			email: true
		}
	});

	if (emailAlreadyExists) {
		res.status(422).json({
			message: 'Email already exists'
		});
		return;
	}

	const user = await prisma.user.create({
		data: {
			name,
			password: hashedPassword,
			email,
		}
	});

	if (!user) {
		res.status(500).json({
			message: 'Failed to create user'
		});
		return;
	}

	res.status(200).json({
		message: 'User created successfully'
	});
	return;
}
