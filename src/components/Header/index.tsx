import { Button } from '../Button';
import * as S from './styles';

export default function Header() {
	return (
		<S.Container>
			{/* Temporary */}
			<h1>Blog</h1>
			<S.Navbar>
				<S.NavItems>
            Blog
				</S.NavItems>
				<S.NavItems disabled>
            Teams
				</S.NavItems>
			</S.Navbar>
			<S.HeaderActions>
				<S.NavItems>
          Login
				</S.NavItems>
				<Button>
          Register
				</Button>
			</S.HeaderActions>
		</S.Container>
	);
}
