import ArticlesGroup from '@/components/ArticlesGroup';
import RootLayout from '@/components/layouts/RootLayout';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Blog - Homepage</title>
			</Head>
			<RootLayout>
				<ArticlesGroup />
			</RootLayout>
		</>
	);
}

// https://www.behance.net/gallery/166340395/Blog?tracking_source=search_projects%7Cblog+website
