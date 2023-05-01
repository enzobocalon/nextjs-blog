import * as S from './styles';
import Link from 'next/link';


export default function NotFound() {
	return (
		<S.Container>
			<h1><span>404 </span>- Page not found</h1>
			<Link href={'/'}>Go to home</Link>
		</S.Container>
	);
}
