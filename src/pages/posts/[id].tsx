import Post from '@/components/Post';
import RootLayout from '@/components/layouts/RootLayout';
import Head from 'next/head';

export default function Posts() {
	return (
		<>
			<Head>
				<title>Posts</title>
			</Head>
			<RootLayout>
				<Post />
			</RootLayout>
		</>
	);
}
