import Header from '../Header';

interface Props {
  children: React.ReactNode
}

export default function RootLayout({children}: Props) {
	return (
		<>
			<Header />
			{children}
		</>
	);
}
