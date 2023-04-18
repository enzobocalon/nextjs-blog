import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Button } from '../Button';
import * as S from './styles';

import { MdMenu } from 'react-icons/md';
import Link from 'next/link';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => setIsMenuOpen(window.innerWidth > 768);
		handleResize();

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return (
		<S.Container>
			{/* Temporary */}
			<h1>Blog</h1>
			<MdMenu size={20} onClick={() => setIsMenuOpen(prev => !prev)}/>
			<AnimatePresence>
				{
					isMenuOpen && (
						<S.Wrapper
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							exit={{opacity: 0}}
							transition={{duration: .3}}>
							<S.Navbar>
								<Link href={'/'}>
									<S.NavItems>
                  Blog
									</S.NavItems>
								</Link>
								<S.NavItems disabled>
                  Teams
								</S.NavItems>
							</S.Navbar>
							<S.HeaderActions>
								<Link href={'/login'}>
									<S.NavItems>
										Login
									</S.NavItems>
								</Link>
								<Link href={'/register'}>
									<Button>
                  Register
									</Button>
								</Link>
							</S.HeaderActions>
						</S.Wrapper>
					)
				}
			</AnimatePresence>
		</S.Container>
	);
}
