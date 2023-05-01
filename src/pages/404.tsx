import NotFound from '@/components/NotFound';
import RootLayout from '@/components/layouts/RootLayout';
import Head from 'next/head';

export default function NotFoundPage() {
	return (
		<>
			<Head>
				<title>Page not found</title>
			</Head>
			<RootLayout>
				<NotFound />
			</RootLayout>
		</>
	);
}
