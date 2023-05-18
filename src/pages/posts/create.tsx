import PostBox from '@/components/PostBox';
import RootLayout from '@/components/layouts/RootLayout';
import IPost from '@/types/Post';
import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import Head from 'next/head';

interface Props {
  post?: {
    body: IPost | null,
    error: string | null
  }
}

export default function CreatePost({post}: Props) {
	return (
		<>
			<Head>
				<title>{post?.body ? `Editing - ${post?.body?.title}` : 'Blog - Create new post'}</title>
			</Head>
			<RootLayout>
				<PostBox post={post}/>
			</RootLayout>
		</>
	);
}

export async function getServerSideProps(context:GetServerSidePropsContext) {
	const session = await getSession(context);
	const { edit, id } = context.query;

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

	if (edit === 'true' && id) {
		try {
			const post = await axios.get(`http://localhost:3000/api/posts/get/${id}`);

			return {
				props: {
					post: {
						body: post.data,
						error: null
					}
				}
			};
		} catch (e) {
			context.res.writeHead(302, {Location: '/404'});
			context.res.end();
			return {
				props: {
					post: {
						body: null,
						error: e.response.data.message
					}
				}
			};
		}
	}

	return {
		props: {}
	};
}
