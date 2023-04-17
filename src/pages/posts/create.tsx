import PostBox from '@/components/PostBox';
import RootLayout from '@/components/layouts/RootLayout';
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
