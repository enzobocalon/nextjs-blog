import Post from '@/components/Post';
import RootLayout from '@/components/layouts/RootLayout';
import IPost from '@/types/Post';
import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';

interface IProps {
  postContent: IPost
}

export default function Posts({postContent}: IProps) {
	return (
		<>
			<Head>
				<title>{postContent.title}</title>
			</Head>
			<RootLayout>
				<Post post={postContent}/>
			</RootLayout>
		</>
	);
}

export async function getServerSideProps(context:GetServerSidePropsContext) {
	const { id } = context.query;

	try {
		const post = await axios.get(`http://localhost:3000/api/posts/get/${id}`);

		return {
			props: {
				postContent: post.data
			},
		};
	} catch (error) {
		if (error.response && error.response.status === 404) {
			context.res.writeHead(302, {
				Location: '/404',
			});
			context.res.end();
			return { props: {} };
		}
		throw error;
	}

}
