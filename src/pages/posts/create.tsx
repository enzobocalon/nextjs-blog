import PostBox from '@/components/PostBox';
import RootLayout from '@/components/layouts/RootLayout';
import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import Head from 'next/head';

export default function CreatePost() {
	return (
		<>
			<Head>
				<title>Blog - Create new Post</title>
			</Head>
			<RootLayout>
				<PostBox />
			</RootLayout>
		</>
	);
}

export async function getServerSideProps(context:GetServerSidePropsContext) {
	const session = await getSession(context);

	if (!session) {
		context.res.writeHead(302, {Location: '/login'});
		context.res.end();
		return {
			props: {}
		};
	}

	if (!['ADMIN', 'AUTHOR'].includes(session.role)) {
		context.res.writeHead(302, {Location: '/'});
		context.res.end();
		return {
			props: {}
		};
	}
}
