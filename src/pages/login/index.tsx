import Form from '@/components/Form';
import RootLayout from '@/components/layouts/RootLayout';
import Head from 'next/head';

export default function Login() {
	return (
		<>
			<Head>
				<title>Login</title>
			</Head>
			<RootLayout>
				<Form isLogin/>
			</RootLayout>
		</>
	);
}
