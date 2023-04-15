import { Button } from '../Button';
import * as S from './styles';

import { MdMenu } from 'react-icons/md';

export default function Header() {
	return (
		<S.Container>
			{/* Temporary */}
			<h1>Blog</h1>
			<MdMenu size={20}/>
			<S.Wrapper>
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
			</S.Wrapper>
		</S.Container>
	);
}
