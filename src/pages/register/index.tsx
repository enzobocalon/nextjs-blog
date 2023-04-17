import Form from '@/components/Form';
import RootLayout from '@/components/layouts/RootLayout';
import Head from 'next/head';

export default function Register() {
	return (
		<>
			<Head>
				<title>Register</title>
			</Head>
			<RootLayout>
				<Form />
			</RootLayout>
		</>
	);
}
