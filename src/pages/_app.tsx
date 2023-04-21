import { GlobalStyle } from '@/styles/global';
import '@/styles/globals.css';
import themes from '@/styles/themes';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { SessionProvider } from 'next-auth/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<SessionProvider>
			<ThemeProvider theme={themes}>
				<GlobalStyle />
				<Component {...pageProps} />
				<ToastContainer position='bottom-left'/>
			</ThemeProvider>
		</SessionProvider>
	);
}
