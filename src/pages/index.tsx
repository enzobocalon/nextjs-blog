import ArticlesGroup from '@/components/ArticlesGroup';
import RootLayout from '@/components/layouts/RootLayout';
import IPost from '@/types/Post';
import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';

type Post = {
  fetchedPosts: IPost[];
  count: number
}

export default function Home({fetchedPosts, count}: Post) {

	return (
		<>
			<Head>
				<title>Blog - Homepage</title>
			</Head>
			<RootLayout>
				<ArticlesGroup
					fetchedPosts={fetchedPosts}
					count={count}/>
			</RootLayout>
		</>
	);
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const posts = await axios.get('http://localhost:3000/api/posts/get?page=1');

	return {
		props: {
			fetchedPosts: posts.data.posts,
			count: posts.data.count
		}
	};
}
