import { GlobalStyle } from '@/styles/global';
import '@/styles/globals.css';
import themes from '@/styles/themes';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<SessionProvider>
			<ThemeProvider theme={themes}>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		</SessionProvider>
	);
}
