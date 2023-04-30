import Post from '@/components/Post';
import RootLayout from '@/components/layouts/RootLayout';
import IPost from '@/types/Post';
import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';

interface IProps {
  post: IPost
}

export default function Posts({post}: IProps) {

	return (
		<>
			<Head>
				<title>Posts</title>
			</Head>
			<RootLayout>
				<Post post={post}/>
			</RootLayout>
		</>
	);
}

export async function getServerSideProps(context:GetServerSidePropsContext) {
	const { id } = context.query;
	const post = await axios.get(`http://localhost:3000/api/posts/get/${id}`);


	return {
		props: {
			post: post.data
		},
	};
}
